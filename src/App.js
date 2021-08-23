import { Component } from "react";
import shortid from "shortid";
import './App.css';
import Form from "./Components/Form";
import Filter from "./Components/Filter";
import ContactList from "./Components/ContactList";

class App extends Component {
  state = {
    contacts: [
      { name: 'Rosie Simpson', number: '455-555', id: 'id-1' },
      { name: 'Hermione Kline', number: '698-789', id: 'id-2' },
      { name: 'Eden Clements', number: '967-123', id: 'id-3' }
    ],
    filter: '',

  }
  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts !== null) {
      this.setState({ contacts: parsedContacts })
    }
  }
  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;
    const newContact = {
      name: name,
      number: number,
      id: shortid.generate()
    }
    let oldContact = false;
    contacts.forEach(contact => {
      if (contact.name === newContact.name) {

        alert(`${contact.name} is already in contacts`);
        oldContact = true;
        return oldContact;
      }
    })
    if (!oldContact) {
      console.log(oldContact)
      this.setState(({ contacts }) => ({
        contacts: [...contacts, newContact],
      }))
    }

  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  }
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  }
  deleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  }
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <h3>Contacts</h3>
        <ContactList contacts={visibleContacts} onDelete={this.deleteContact} />

      </div>
    )
  }
}

export default App;
