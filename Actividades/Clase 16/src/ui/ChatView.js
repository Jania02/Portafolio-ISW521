/**
 * UI — Adaptador primario / "driving adapter".
 * Traduce eventos del DOM en llamadas a los casos de uso, y el resultado
 * de los casos de uso en pintado sobre el DOM. No sabe NADA de localStorage
 * ni de fetch: solo conoce los casos de uso (application layer).
 * (SOLID/SRP — su única responsabilidad es la interacción con el DOM.)
 */
export class ChatView {
  #chatEl;
  #entradaEl;
  #estadoEl;
  #btnEl;
  #offlineToggleEl;
  #loadHistoryUseCase;
  #sendMessageUseCase;
  #modelGatewaySwitcher;
  #history;

  constructor({
    chatEl,
    entradaEl,
    estadoEl,
    btnEl,
    offlineToggleEl,
    loadHistoryUseCase,
    sendMessageUseCase,
    modelGatewaySwitcher,
  }) {
    this.#chatEl = chatEl;
    this.#entradaEl = entradaEl;
    this.#estadoEl = estadoEl;
    this.#btnEl = btnEl;
    this.#offlineToggleEl = offlineToggleEl;
    this.#loadHistoryUseCase = loadHistoryUseCase;
    this.#sendMessageUseCase = sendMessageUseCase;
    this.#modelGatewaySwitcher = modelGatewaySwitcher;
  }

  async init() {
    this.#history = await this.#loadHistoryUseCase.execute();
    this.#history.messages.forEach((m) => this.#pintarMensaje(m.role, m.text));
    this.#estadoEl.textContent = `Memoria restaurada: ${this.#history.length} mensajes`;

    this.#btnEl.addEventListener("click", () => this.#onEnviar());
    this.#entradaEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") this.#onEnviar();
    });

    // El botón solo llama a un método del PUERTO (modelGatewaySwitcher);
    // no sabe nada de fetch ni de las respuestas simuladas.
    this.#offlineToggleEl.addEventListener("change", () => {
      const offline = this.#offlineToggleEl.checked;
      this.#modelGatewaySwitcher.setOffline(offline);
      this.#estadoEl.textContent = offline
        ? "🔌 Modo offline activado: las respuestas ya no usan fetch"
        : "🌐 Modo online activado: las respuestas usan la API real";
    });
  }

  async #onEnviar() {
    const texto = this.#entradaEl.value.trim();
    if (!texto) return;

    this.#pintarMensaje("user", texto);
    this.#entradaEl.value = "";
    this.#estadoEl.textContent = "Pensando...";

    const iaMessage = await this.#sendMessageUseCase.execute(this.#history, texto);

    this.#pintarMensaje("ia", iaMessage.text);
    this.#estadoEl.textContent = "✓ Respuesta recibida (fetch OK)";
  }

  #pintarMensaje(role, texto) {
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    div.textContent = texto;
    this.#chatEl.appendChild(div);
    this.#chatEl.scrollTop = this.#chatEl.scrollHeight;
  }
}
