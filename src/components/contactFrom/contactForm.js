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
            <input value={name} type="text" name="name" placeholder="Contact Name" />
            <br />
            <input value={phone} type="tel" name="phone" placeholder="Contact Phone" />
            <br />
            <input value={email} type="email" name="email" placeholder="Conact Email" />
            <br />
            <input type="submit" value="Add Contact"/>
        </form>
    );
};

export default ContactForm;