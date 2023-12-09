import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const storageContacts = localStorage.getItem('contacts');
    if (storageContacts) {
      this.setState({ contacts: JSON.parse(storageContacts) });
    }
  }
  
componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }


  handleAddContact = data => {
    const isExist = this.state.contacts.some(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (isExist) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    const finalContact = {
      ...data,
      id: nanoid(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, finalContact],
    }));
  };

  getContacts = () => {
    const { contacts, filter } = this.state;
    const lowerWords = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerWords)
    );
  };

  filterContacts = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  handleDelete = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={this.handleAddContact} />

        <h2>Contacts</h2>

        {this.state.contacts.length !== 0 ? (
          <>
            <Filter value={this.filter} filterContacts={this.filterContacts} />
            <ContactList
              contacts={this.getContacts()}
              handleDelete={this.handleDelete}
            />
          </>
        ) : (
          <p>Phonebook is empty</p>
        )}
      </div>
    );
  }
}

export default App;
