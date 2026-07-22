/**
 * PUERTO (hexagonal) — contrato para consultar "al modelo" (hoy una API de
 * prueba, mañana podría ser OpenAI, Claude, un mock para tests, etc.).
 * Cambiar de proveedor NUNCA debería obligar a tocar los casos de uso.
 * (SOLID/OCP — abierto a extensión vía nuevos adaptadores, cerrado a
 * modificación de quien lo consume.)
 */
export class ModelGatewayPort {
  /**
   * @param {number} indice
   * @returns {Promise<string>} el texto de respuesta del modelo
   */
  async getResponse(indice) {
    throw new Error("ModelGatewayPort.getResponse() no implementado");
  }
}
