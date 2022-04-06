import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { useState } from 'react';

import ContactsPage from './components/contactsPage/contactsPage';
import AppointmentsPage from "./components/appointmentsPage/appointmentsPage";

function App() {

  const [contacts, setContacts] = useState();
  const [appointments, setAppointments] = useState();

  const ROUTES = {
    CONTACTS: '/contacts',
    APOINTMENTS: 'appointments'
  };

  const addContact = (name, phone, email) => {
    setContacts(prev => [...prev, {name, phone, email}]);
  };

  const addAppointment = (title, contact, date, time) => {
    setAppointments(prev => [...prev, {title, contact, date, time}]);
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APOINTMENTS} activeClassName="active">
          appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             
            <ContactsPage 
              addContacts={addContact}
              contacts={contacts}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            
            <AppointmentsPage 
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
