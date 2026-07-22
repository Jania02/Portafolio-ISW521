/**
 * APLICACIÓN — Caso de uso.
 * Orquesta la carga inicial del historial. Solo conoce el PUERTO
 * (ChatRepositoryPort), nunca la implementación concreta (localStorage).
 * (SOLID/SRP — una sola razón para cambiar: cómo se "arranca" el historial.)
 */
export class LoadHistoryUseCase {
  #repository;

  constructor(repository) {
    this.#repository = repository;
  }

  async execute() {
    return this.#repository.load();
  }
}
