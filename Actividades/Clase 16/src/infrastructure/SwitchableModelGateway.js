import { ModelGatewayPort } from "../application/ports/ModelGatewayPort.js";

/**
 * INFRAESTRUCTURA — Adaptador compuesto (Strategy/Decorator sobre
 * ModelGatewayPort). Ante SendMessageUseCase se presenta como un
 * ModelGatewayPort más — el caso de uso NUNCA se entera de que, por
 * dentro, hay dos adaptadores distintos y un interruptor entre ellos.
 *
 * Esto es la prueba en vivo de OCP + DIP: se puede cambiar de proveedor
 * de "modelo" en tiempo real sin tocar ni una línea de SendMessageUseCase.
 */
export class SwitchableModelGateway extends ModelGatewayPort {
  #onlineGateway;
  #offlineGateway;
  #offline = false;

  constructor(onlineGateway, offlineGateway) {
    super();
    this.#onlineGateway = onlineGateway;
    this.#offlineGateway = offlineGateway;
  }

  setOffline(value) {
    this.#offline = Boolean(value);
  }

  get isOffline() {
    return this.#offline;
  }

  async getResponse(indice) {
    const gateway = this.#offline ? this.#offlineGateway : this.#onlineGateway;
    return gateway.getResponse(indice);
  }
}
