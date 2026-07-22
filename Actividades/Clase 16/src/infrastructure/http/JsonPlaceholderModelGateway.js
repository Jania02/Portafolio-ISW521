import { ModelGatewayPort } from "../../application/ports/ModelGatewayPort.js";

// FIX: el proyecto original tenía un typo ("postss") que causaba 404 en toda petición.
const ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

/**
 * INFRAESTRUCTURA — Adaptador (implementa ModelGatewayPort).
 * Encapsula el detalle de que "el modelo" hoy es una API pública de prueba.
 * Si mañana se conecta un modelo real, solo se crea OTRO adaptador que
 * implemente ModelGatewayPort — el caso de uso no cambia ni una línea.
 * (SOLID/OCP en acción.)
 */
export class JsonPlaceholderModelGateway extends ModelGatewayPort {
  async getResponse(indice) {
    const r = await fetch(`${ENDPOINT}/${indice}`);
    if (!r.ok) throw new Error(`HTTP ${r.status}`);
    const datos = await r.json();
    return `🤖 ${datos.title}`;
  }
}
