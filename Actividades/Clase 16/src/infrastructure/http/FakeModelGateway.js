import { ModelGatewayPort } from "../../application/ports/ModelGatewayPort.js";

const RESPUESTAS_OFFLINE = [
  "Estoy en modo offline, pero aquí sigo.",
  "Sin internet, sin problema: esta respuesta es local.",
  "Modo offline activo: no se hizo ninguna petición de red.",
  "Puedo responder aunque no haya conexión.",
  "Esta es una respuesta simulada, generada sin fetch.",
];

/**
 * INFRAESTRUCTURA — Adaptador (implementa ModelGatewayPort), igual que
 * JsonPlaceholderModelGateway, pero sin tocar la red: responde con un
 * texto simulado. Existe SOLO para poder demostrar en vivo que el
 * hexágono no distingue entre un adaptador real y uno falso: ambos
 * cumplen el mismo contrato (ModelGatewayPort).
 */
export class FakeModelGateway extends ModelGatewayPort {
  async getResponse(indice) {
    // Pequeña espera simulada, sin bloquear el hilo principal
    // (a diferencia del bug original de precalentar()).
    await new Promise((resolve) => setTimeout(resolve, 300));
    const texto = RESPUESTAS_OFFLINE[(indice - 1) % RESPUESTAS_OFFLINE.length];
    return `🔌 ${texto}`;
  }
}
