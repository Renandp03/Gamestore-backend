import notificationRepository from '../repositores/notification-repository.js';
import {notification} from '../repositores/notification-repository.js'

async function getUserNotifications(userId:number) : Promise <notification[]> {
    const notifications = await notificationRepository.findByUserId(userId);
    return notifications;
}

const notificationService = {
    getUserNotifications
}

export default notificationService;