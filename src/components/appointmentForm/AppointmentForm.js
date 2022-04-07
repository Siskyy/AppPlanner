import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const getContactNames = () => {
    return contacts.map((contact) => contact.name);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="title"
        value={title}
        placeholder="Appointment title"
      />
      <br />
      <input 
        type="date"
        name="date"
        value={date}
        min={getTodayString()}

      />
      <br />
      <input 
        type="time"
        name="time"
        value={time}
      />
      <br />
      <input type="submit" value="Add Appointment" />
    </form>
  );
};
