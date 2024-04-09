import * as React from 'react';

export const EmailTemplate = ({ firstName }) => (
    <div>
        <h1>Neues Kontaktformular</h1>
        <p>Ein neues Kontakformular ist eingegangen. Das sind die Angaben:</p>
        <p>Betreff:</p>
        <p>{subject}</p>
        <p>Herr / Frau</p>
        <p>Vorname:</p>
        <p>{firstName}</p>
        <p>Nachname:</p>
        <p>{lastName}</p>
        <p>Strasse:</p>
        <p>{street}</p>
        <p>Nr:</p>
        <p>{nr}</p>
        <p>PLZ:</p>
        <p>{plz}</p>
        <p>Ort:</p>
        <p>{}</p>
        <p>E-Mail:</p>
        <p>{email}</p>
        <p>Telefon:</p>
        <p>{phone}</p>
        <p>Bemerkung:</p>
        <p>{message}</p>
    </div>
);
