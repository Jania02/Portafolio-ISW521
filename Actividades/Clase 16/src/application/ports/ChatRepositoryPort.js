/**
 * PUERTO (hexagonal) — contrato que debe cumplir cualquier forma de
 * persistir el historial del chat (localStorage, IndexedDB, un backend real, etc.).
 * La capa de aplicación depende de ESTA abstracción, nunca de una
 * implementación concreta. (SOLID/DIP — Inversión de Dependencias).
 * (SOLID/ISP — interfaz pequeña y específica: solo load/save, nada más.)
 */
export class ChatRepositoryPort {
  /** @returns {Promise<import("../../domain/ChatHistory.js").ChatHistory>} */
  async load() {
    throw new Error("ChatRepositoryPort.load() no implementado");
  }

  /** @param {import("../../domain/ChatHistory.js").ChatHistory} history */
  async save(history) {
    throw new Error("ChatRepositoryPort.save() no implementado");
  }
}
