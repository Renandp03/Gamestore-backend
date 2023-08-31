import notificationRepository from '../repositores/notification-repository.js';
import {notification} from '../repositores/notification-repository.js'

async function getUserNotifications(userId:number) : Promise <notification[]> {
    const notifications = await notificationRepository.findByUserId(userId);
    return notifications;
}

async function getNotificationInfos(notificationId:number) {
    
}

const notificationService = {
    getUserNotifications,
    getNotificationInfos
}

export default notificationService;