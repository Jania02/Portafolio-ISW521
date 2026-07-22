import { Message } from "./Message.js";

/**
 * DOMINIO — Entidad / Aggregate Root.
 * Encapsula la colección de mensajes y las reglas de negocio sobre ella.
 * Nadie fuera de esta clase puede mutar el arreglo interno directamente
 * (evita el bug original de guardar el estado "a medias" o corrupto).
 * (DDD: Aggregate Root — punto único de entrada para modificar el historial.
 *  SOLID/SRP — solo administra la colección de mensajes y su invariante de orden.)
 */
export class ChatHistory {
  #messages;

  constructor(messages = []) {
    this.#messages = [...messages];
  }

  /** Copia defensiva: nadie puede mutar el estado interno desde afuera. */
  get messages() {
    return [...this.#messages];
  }

  get length() {
    return this.#messages.length;
  }

  addMessage(message) {
    if (!(message instanceof Message)) {
      throw new Error("ChatHistory solo acepta instancias de Message");
    }
    this.#messages.push(message);
  }

  /**
   * Regla de negocio heredada del proyecto original: el índice que se le
   * pide a la "API del modelo" depende de cuántos mensajes ya existen.
   */
  nextModelIndex() {
    return this.#messages.length + 1;
  }

  toPlainArray() {
    return this.#messages.map((m) => m.toPlainObject());
  }

  static fromPlainArray(arr) {
    const history = new ChatHistory();
    arr.forEach((obj) => history.addMessage(Message.fromPlainObject(obj)));
    return history;
  }
}
