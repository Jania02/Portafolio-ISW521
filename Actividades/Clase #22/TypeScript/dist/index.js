"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EmailNotification_1 = require("./classes/EmailNotification");
const SmsNotification_1 = require("./classes/SmsNotification");
const NotificationService_1 = require("./services/NotificationService");
const email = new EmailNotification_1.EmailNotification("Prueba@gmail.com", "Holaaa", "Prueba");
const sms = new SmsNotification_1.SmsNotification("+506 87704881", "Recibiendo mensaje");
const cola = [email, sms];
const service = new NotificationService_1.NotificationServices();
service.processNotifications(cola);
//# sourceMappingURL=index.js.map