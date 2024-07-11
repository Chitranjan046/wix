import { CronJob } from 'cron';
import { getBirthdayContacts } from './contacts.js';
import { sendBirthdayEmail } from './emails.js';

export function scheduler(context) {
    // Example: Schedule a job to run daily at midnight
    new CronJob('0 0 * * *', function() {
        const today = new Date();
        const month = today.getMonth() + 1; // January is 0 in JavaScript
        const day = today.getDate();

        getBirthdayContacts(month, day)
            .then(contacts => {
                contacts.forEach(contact => {
                    const emailContent = `Happy Birthday, ${contact.firstName}!`;
                    sendBirthdayEmail(contact.email, emailContent);
                });
            })
            .catch(error => {
                console.error('Failed to send birthday emails:', error);
            });
    }, null, true, 'America/New_York'); // Adjust timezone as needed
}
