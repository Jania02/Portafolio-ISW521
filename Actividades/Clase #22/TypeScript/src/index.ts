import { INotification } from "./interfaces/INotification";
import { EmailNotification } from "./classes/EmailNotification";
import { SmsNotification } from "./classes/SmsNotification";
import { NotificationServices } from "./services/NotificationService";

const email = new EmailNotification("Prueba@gmail.com", "Holaaa","Prueba" );
const sms = new SmsNotification("+506 87704881", "Recibiendo mensaje")

const cola: INotification[] = [email,sms];
const service = new NotificationServices();

service.processNotifications(cola);