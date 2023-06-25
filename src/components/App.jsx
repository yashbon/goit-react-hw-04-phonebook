import { Component, useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { customAlphabet } from 'nanoid';
import Filter from './Filter/Filter';

const nanoid = customAlphabet('1234567890', 2);

function App() {
    // state = {
    //     contacts: [
    //         { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    //         { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    //         { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    //         { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    //     ],
    //     filter: '',
    // };

    const dataContacts = [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const [contacts, setContacts] = useState(
        JSON.parse(localStorage.getItem('contacts')) ?? dataContacts
    );

    const [filter, setFilter] = useState('');

    // componentDidMount() {
    //     const contacts = JSON.parse(localStorage.getItem('contacts'));
    // if (contacts) {
    //     this.setState({ contacts: contacts });
    // }
    // }
    // if (!contacts) {
    //     contacts = [...dataContacts];
    // }
    console.log(contacts);

    // componentDidUpdate(prevState) {
    //     if (contacts !== prevState.contacts) {
    //         localStorage.setItem(
    //             'contacts',
    //             JSON.stringify(contacts)
    //         );
    //     }
    // }

    useEffect(() => {
        // if (contacts !== dataContacts) {
        //     localStorage.setItem('contacts', JSON.stringify(contacts));
        // }
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleSubmitForm = contact => {
        console.log(contact);

        if (
            contacts.find(
                item => item.name.toLowerCase() === contact.name.toLowerCase()
            )
        ) {
            alert(`${contact.name} is already in contacts`);
        } else {
            const newContact = {
                id: 'id-' + nanoid(),
                name: contact.name,
                number: contact.number,
            };
            console.log('newContact: ', newContact);
            // this.setState(({ contacts }) => ({
            //     contacts: [newContact, ...contacts],
            // }));
            // contacts = [newContact, ...contacts];
            setContacts(contacts => [newContact, ...contacts]);
            console.log('contacts: ', contacts);
        }
    };

    const changeFilter = event => {
        // this.setState({ filter: event.currentTarget.value });
        setFilter(event.currentTarget.value);
    };

    const deleteContact = id => {
        this.setState(PrevState => ({
            contacts: PrevState.contacts.filter(contact => contact.id !== id),
        }));
    };

    // constfilteredContacts = () => {
    //     contacts.filter(contact =>
    //         contact.name.toLowerCase().includes(filter.toLowerCase())
    //     );
    // };

    // render() {
    // const filteredContacts = contacts.filter(contact =>
    //     contact.name.toLowerCase().includes(filter.toLowerCase())
    // );

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
                backgroundColor: 'LightSteelBlue',
            }}
        >
            <h1>Phonebook</h1>
            <ContactForm submitForm={handleSubmitForm} />
            <h2>Contacts</h2>
            <Filter
                title="Find contasts by name"
                value={filter}
                onChange={changeFilter}
            />
            <ContactList
                contacts={filteredContacts}
                deleteContact={deleteContact}
            />
        </div>
    );
}
// }

export default App;
