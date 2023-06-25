import PropTypes from 'prop-types';
import { Component, useState } from 'react';
import css from './ContactForm.module.css';
// import { customAlphabet } from 'nanoid';

// const nanoid = customAlphabet('1234567890', 1);

function ContactForm({ submitForm }) {
    // state = {
    //     id: '',
    //     name: '',
    //     number: '',
    // };

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = event => {
        // this.setState({
        //     [event.currentTarget.name]: event.currentTarget.value,
        // });

        // console.log(event.currentTarget.name);

        switch (event.currentTarget.name) {
            case 'name':
                setName(event.currentTarget.value);

                break;
            case 'number':
                setNumber(event.currentTarget.value);

                break;

            default:
                break;
        }
        // setName(event.currentTarget.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        const newContact = {
            // name: this.state.name,
            // number: this.state.number,

            name: name,
            number: number,
        };
        // console.log(newContact);

        // this.props.submitForm(newContact);
        submitForm(newContact);
        resetFrom();
    };

    const resetFrom = () => {
        // this.setState({ name: '', number: '' });
        setName('');
        setNumber('');
    };

    return (
        <form className={css.form} action="" onSubmit={handleSubmit}>
            <label className={css.label} htmlFor="">
                Name
                <br />
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    value={name}
                    onChange={handleChange}
                />
            </label>
            <label className={css.label} htmlFor="">
                Number
                <br />
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    pattern="^[0-9]+$"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    value={number}
                    onChange={handleChange}
                />
            </label>
            <button className={css.form_button} type="submit">
                Add contact
            </button>
        </form>
    );
}

export default ContactForm;

ContactForm.propTypes = {
    submitForm: PropTypes.func.isRequired,
};
