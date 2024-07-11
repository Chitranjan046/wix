import { contactsRouter } from './contacts.js';
import { emailsRouter } from './emails.js';
import { scheduler } from './scheduler.js';

// Define backend routes
export function backend(app, context) {
    // Use routers for specific functionalities
    app.use('/contacts', contactsRouter);
    app.use('/emails', emailsRouter);

    // Start scheduler for sending birthday emails
    scheduler(context);
}
