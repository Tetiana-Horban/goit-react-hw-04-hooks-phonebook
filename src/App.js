import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import useLocalStorage from 'hooks/useLocalStorage';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';
import ContactsList from './components/ContactList/ContactList';
import { AppWrapper, Title } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const renderContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizeFilter)
    );
  };

  const addContact = ({ name, number }) => {
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notiflix.Notify.warning(`${name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };
      setContacts(prevContacts => [...prevContacts, contact]);
    }
  };

  const deleteContact = idContact => {
    setContacts(contacts.filter(contact => contact.id !== idContact));
  };
  return (
    <AppWrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter onChange={handleChangeFilter} />
      <ContactsList
        contacts={renderContacts()}
        onDeleteContact={deleteContact}
      />
    </AppWrapper>
  );
};
export default App;
