import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { addContact } from 'redux/phoneBookSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.phonebook.contacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact();
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onAddContact = () => {
    const newContact = { id: nanoid(), name, number };

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        return alert(`${name} is already in contacts`);
      }
    }
    dispatch(addContact(newContact));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.contactFormLabel}>
        Name
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.contactFormLabel}>
        Number
        <input
          className={css.contactFormInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={css.contactFormButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
