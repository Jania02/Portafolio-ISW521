import { ChatRepositoryPort } from "../../application/ports/ChatRepositoryPort.js";
import { ChatHistory } from "../../domain/ChatHistory.js";

const CLAVE_MEMORIA = "memoria_llm";

/**
 * INFRAESTRUCTURA — Adaptador (implementa ChatRepositoryPort).
 * Aquí es donde se corrige, a nivel de arquitectura, el bug original de
 * "memoria corrupta": se serializa con JSON.stringify al guardar y se
 * reconstruye con JSON.parse al leer, con limpieza defensiva si hay datos
 * corruptos de una versión anterior.
 * (SOLID/LSP — puede sustituirse por cualquier otro adaptador, p. ej.
 *  IndexedDbChatRepository, sin que el caso de uso se entere ni se rompa.)
 */
export class LocalStorageChatRepository extends ChatRepositoryPort {
  async load() {
    const guardado = localStorage.getItem(CLAVE_MEMORIA);
    if (guardado === null) return new ChatHistory();

    try {
      const arr = JSON.parse(guardado);
      return ChatHistory.fromPlainArray(arr);
    } catch (e) {
      console.warn("Memoria corrupta detectada, limpiando localStorage:", e);
      localStorage.removeItem(CLAVE_MEMORIA);
      return new ChatHistory();
    }
  }

  async save(history) {
    localStorage.setItem(CLAVE_MEMORIA, JSON.stringify(history.toPlainArray()));
  }
}
