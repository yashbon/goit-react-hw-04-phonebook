import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = props => {
    const { contacts, deleteContact } = props;
    return (
        <ul className={css.contactList}>
            {contacts.map(contact => (
                <li className={css.contactListItem} key={contact.id}>
                    {contact.name} {contact.number}
                    <button
                        className={css.deleteContact_Button}
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                    >
                        delete
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    deleteContact: PropTypes.func.isRequired,
};
