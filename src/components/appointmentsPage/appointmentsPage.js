import React, { useState } from 'react';

import { AppointmentForm } from '../appointmentForm/AppointmentForm';
import { TileList } from '../tileList/TileList';

const AppointmentsPage = ({appointments, addAppointment, contacts}) => {

    const [title, setTitle] = useState('');
    const [contact, setContact] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        addAppointment(title, contact, date, time);
        setTitle('');
        setContact('');
        setDate('');
        setTime('');
    }

    return (
        <section>
            <h2>Add Appointment</h2>
            <AppointmentFrom 
                contacts={contacts}
                title={title}
                setTitle={setTitle}
                contact={contact}
                setContact={setContact}
                date={date}
                setDate={setDate}
                time={time}
                setTime={setTime}
                handleSubmit={handleSubmit}
            />
        </section>
    );
};

export default AppointmentsPage;