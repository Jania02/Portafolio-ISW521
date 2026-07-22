/**
 * DOMINIO — Value Object.
 * Representa un mensaje inmutable del chat. No sabe nada de localStorage,
 * de fetch, ni del DOM: solo conoce las reglas propias de "qué es un mensaje válido".
 * (DDD: Value Object — se identifica por su contenido, no por una identidad propia.
 *  SOLID/SRP — su única responsabilidad es validar y representar un mensaje.)
 */
export class Message {
  #role;
  #text;

  constructor(role, text) {
    if (role !== "user" && role !== "ia") {
      throw new Error(`Rol de mensaje inválido: "${role}"`);
    }
    if (typeof text !== "string" || !text.trim()) {
      throw new Error("El texto del mensaje no puede estar vacío");
    }
    this.#role = role;
    this.#text = text.trim();
  }

  get role() {
    return this.#role;
  }

  get text() {
    return this.#text;
  }

  /** Serializa a un objeto plano, compatible con el esquema guardado en localStorage. */
  toPlainObject() {
    return { rol: this.#role, texto: this.#text };
  }

  /** Reconstruye un Message a partir del objeto plano guardado. */
  static fromPlainObject(obj) {
    return new Message(obj.rol, obj.texto);
  }
}
