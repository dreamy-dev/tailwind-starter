import * as React from 'react';

export const EmailTemplate = ({
    subject,
    first_name,
    last_name,
    street,
    number,
    zip,
    city,
    email,
    phone,
    message,
}) => (
    <div>
        <h1>Neues Kontaktformular</h1>
        <p>Ein neues Kontakformular ist eingegangen. Das sind die Angaben:</p>
        <p>Subject:</p>
        <p>{subject}</p>
        {/* <p>Gender</p> */}
        <p>First Name:</p>
        <p>{first_name}</p>
        <p>Last Name:</p>
        <p>{last_name}</p>
        <p>Street:</p>
        <p>{street}</p>
        <p>Number:</p>
        <p>{number}</p>
        <p>ZIP:</p>
        <p>{zip}</p>
        <p>city:</p>
        <p>{city}</p>
        <p>E-Mail:</p>
        <p>{email}</p>
        <p>Phone:</p>
        <p>{phone}</p>
        <p>Message:</p>
        <p>{message}</p>
    </div>
);
