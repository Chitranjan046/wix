import wixData from 'wix-data';

export function getContacts(userId) {
    return wixData.query('Contacts')
        .eq('userId', userId)
        .find();
}

export function addContact(contactData) {
    return wixData.insert('Contacts', contactData);
}

export function deleteContact(contactId) {
    return wixData.remove('Contacts', contactId);
}

// Other CRUD operations as needed
