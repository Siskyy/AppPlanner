import React from 'react';
import { useState, useEffect} from 'react';

import ContactForm from '../contactFrom/contactForm';
import {TileList} from '../tileList/TileList';


const ContactsPage = (props) => {

    const contacts = props.contacts;
    const addContact = props.addContact;

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [duplicate, setDuplicate] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!duplicate) {
            addContact(name, phone, email);

            /* clear from after submission */
            setName('');
            setPhone('');
            setEmail('');
        }
    };

    useEffect(() => {
        
        const checkIfDuplicate = () => {
            const findItem = contacts.find((contact) => contact.name === name);
        if (findItem !== undefined) {
            return true;
        }
        return false;
        };

        if (checkIfDuplicate()) {
            setDuplicate(true);
        } else {
            setDuplicate(false);
        }
    }, [name, contacts, duplicate]);


    return (
       <>
       <section>
           <h2>Add Contact</h2>
           <ContactForm 
            name={name}
            setName={setName}
            phone={phone}
            setPhone={setPhone}
            email={email}
            setEmail={setEmail}
            handleSubmit={handleSubmit}
           />
       </section>
       <br />
       <section>
           <h2>Contacts</h2>
            <TileList tiles={contacts} />
       </section>
       </>
    );
};

export default ContactsPage;