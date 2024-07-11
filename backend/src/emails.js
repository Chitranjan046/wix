import { sendEmail } from './externalEmailService.js';

export function sendBirthdayEmail(email, content) {
    return sendEmail(email, 'Birthday Greetings', content);
}


