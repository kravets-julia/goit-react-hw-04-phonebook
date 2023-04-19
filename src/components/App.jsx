import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';
import { Form } from './Form/Form';
import { FilterContacts } from './FilterContacts/FilterContacts';

import css from '../components/App.module.css';

const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  const formSubmitHandler = data => {
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    )
      ? alert(`${data.name} is alredy in contacts`)
      : setContacts(prev => {
          return [
            ...prev,
            {
              id: nanoid(),
              name: data.name,
              number: data.number,
            },
          ];
        });
  };

  function filteredContacts() {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <>
      <h1 className={css.title}>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className={css.title__contacts}>Contacts</h2>
      <FilterContacts value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
