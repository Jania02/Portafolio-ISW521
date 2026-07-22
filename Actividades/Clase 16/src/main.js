import { LoadHistoryUseCase } from "./application/LoadHistoryUseCase.js";
import { SendMessageUseCase } from "./application/SendMessageUseCase.js";
import { LocalStorageChatRepository } from "./infrastructure/persistence/LocalStorageChatRepository.js";
import { JsonPlaceholderModelGateway } from "./infrastructure/http/JsonPlaceholderModelGateway.js";
import { FakeModelGateway } from "./infrastructure/http/FakeModelGateway.js";
import { SwitchableModelGateway } from "./infrastructure/SwitchableModelGateway.js";
import { ChatView } from "./ui/ChatView.js";

/**
 * COMPOSITION ROOT.
 * Este es el ÚNICO archivo de todo el proyecto que conoce tanto las
 * abstracciones (casos de uso) como las implementaciones concretas
 * (adaptadores). Aquí se hace la inyección de dependencias "a mano".
 * Si mañana cambias localStorage por IndexedDB, o la API de prueba por
 * un modelo real, SOLO se toca esta línea de "cableado" — el dominio,
 * los casos de uso y la UI no cambian.
 */
const repository = new LocalStorageChatRepository();

// Dos adaptadores que cumplen el mismo puerto (ModelGatewayPort), y un
// "switcher" que decide cuál usar en tiempo real sin que el caso de uso
// se entere del cambio.
const onlineGateway = new JsonPlaceholderModelGateway();
const offlineGateway = new FakeModelGateway();
const modelGatewaySwitcher = new SwitchableModelGateway(onlineGateway, offlineGateway);

const loadHistoryUseCase = new LoadHistoryUseCase(repository);
const sendMessageUseCase = new SendMessageUseCase(repository, modelGatewaySwitcher);

const view = new ChatView({
  chatEl: document.getElementById("chat"),
  entradaEl: document.getElementById("entrada"),
  estadoEl: document.getElementById("estado"),
  btnEl: document.getElementById("btnEnviar"),
  offlineToggleEl: document.getElementById("modoOffline"),
  loadHistoryUseCase,
  sendMessageUseCase,
  modelGatewaySwitcher,
});

view.init();
