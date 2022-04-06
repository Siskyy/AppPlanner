import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import ContactsPage from './components/contactsPage/contactsPage';
import AppointmentsPage from "./components/appointmentsPage/appointmentsPage";

function App() {

  const ROUTES = {
    CONTACTS: '/contacts',
    APOINTMENTS: 'appointments'
  }

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
             
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            
            <AppointmentsPage />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
