import React from 'react';

const ContactForm = ({
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input value={name}/>
            <input value={phone}/>
            <input value={email}/>
            <input type="submit"/>
        </form>
    );
};

export default ContactForm;