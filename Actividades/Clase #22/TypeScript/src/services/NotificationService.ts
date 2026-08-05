import { INotification } from "../interfaces/INotification";

export class NotificationServices{
    public processNotifications(notifications: INotification[]):void{
        console.log("Analizando notificaciones por bloques \n\n");
        
        for (const notification of notifications ){
            notification.send();
        }
        console.log("Finalizacion del bloque de notificaciones\n\n");

    }

}