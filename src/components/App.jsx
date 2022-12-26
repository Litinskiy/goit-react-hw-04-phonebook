import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { AddContactForm } from "../components/AddContactForm/AddContactForm";
import { Section } from "../components/Section/Section";
import { ContactList } from "../components/ContactList/ContactList";
import { Filter } from "../components/Filter/Filter";


export function App () {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? []);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  function addContact (name, number) {
    const newContact = {
      name,
      number,
      id: nanoid(),
    }

    const isInContacts = contacts.find(contact => contact.name === newContact.name)
    if (isInContacts) {
    alert('You already have this dude in your Phonebook!')
      return
    }

    setContacts([...contacts, newContact])
  }

  function filterByName (e) {
    setFilter(e.target.value)
  }

  function deleteContact(id) {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div className="wrapper">
      <Section title={ "Phone Book"}>
        <AddContactForm onAddContact={ addContact}></AddContactForm>
      </Section>
      
      <Section title={"Contacts:"}>
        <Filter filterByName={filterByName} filterValue={filter}></Filter>
        <ContactList contacts={filteredContacts} deleteContact={deleteContact}></ContactList>
      </Section>
    </div>
  )
}
