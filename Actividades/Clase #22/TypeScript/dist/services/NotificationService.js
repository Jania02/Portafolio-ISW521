"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationServices = void 0;
class NotificationServices {
    processNotifications(notifications) {
        console.log("Analizando notificaciones por bloques \n\n");
        for (const notification of notifications) {
            notification.send();
        }
        console.log("Finalizacion del bloque de notificaciones\n\n");
    }
}
exports.NotificationServices = NotificationServices;
//# sourceMappingURL=NotificationService.js.map