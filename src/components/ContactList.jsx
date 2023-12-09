import React from 'react';


export const ContactList = ({ contacts, handleDelete }) => {
  return (
    <ul className="contact-menu">
      {contacts.map(({ id, name, number }) => (
        <li className="contact-list" key={id}>
          {name}: {number}
          <button className="delete-btn" onClick={() => handleDelete(id)} >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};