import { Message } from "../domain/Message.js";

/**
 * APLICACIÓN — Caso de uso.
 * Aquí es donde se corrige, a nivel de arquitectura, el bug original de
 * "condición de carrera": todo el flujo está encadenado con await, así que
 * es IMPOSIBLE pintar una respuesta antes de que el fetch real termine
 * (ya no existe un setTimeout con tiempo fijo adivinando cuándo "ya debería
 * estar lista" la respuesta).
 *
 * Depende únicamente de los PUERTOS (ChatRepositoryPort, ModelGatewayPort),
 * nunca de localStorage ni de fetch directamente.
 * (SOLID/DIP — depende de abstracciones, no de detalles concretos.
 *  SOLID/SRP — su única razón de cambio es "cómo se procesa el envío de un mensaje".)
 */
export class SendMessageUseCase {
  #repository;
  #modelGateway;

  constructor(repository, modelGateway) {
    this.#repository = repository;
    this.#modelGateway = modelGateway;
  }

  /**
   * @param {import("../domain/ChatHistory.js").ChatHistory} history
   * @param {string} texto
   * @returns {Promise<Message>} el mensaje de respuesta del "modelo"
   */
  async execute(history, texto) {
    const userMessage = new Message("user", texto);
    history.addMessage(userMessage);
    await this.#repository.save(history);

    const indice = history.nextModelIndex();
    let respuestaTexto;
    try {
      respuestaTexto = await this.#modelGateway.getResponse(indice);
    } catch (e) {
      respuestaTexto = `⚠️ Error al consultar el modelo (${e.message})`;
    }

    const iaMessage = new Message("ia", respuestaTexto);
    history.addMessage(iaMessage);
    await this.#repository.save(history);

    return iaMessage;
  }
}
