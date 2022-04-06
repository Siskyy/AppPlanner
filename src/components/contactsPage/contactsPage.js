import React from 'react';
import { useState, useEffect} from 'react';

import ContactForm from '../contactFrom/contactForm';


const ContactsPage = (props) => {

    const contacts = props.contacts;
    const addContact = props.addContact;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duplicate, setDuplicate] = useState(false);

    const hadndleSubmit = (e) => {
        e.preventDefault();

        if (!duplicate) {
            addContact(name, phone, email);

            /* clear from after submission */
            setName('');
            setPhone('');
            setEmail('');
        }
    };


    return (
        <div>

        </div>
    );
};

export default ContactsPage;