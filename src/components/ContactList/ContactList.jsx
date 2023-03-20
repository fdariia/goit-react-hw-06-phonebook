import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/phoneBookSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state =>
    state.phonebook.contacts.filter(contact =>
      contact.name.toLowerCase().includes(state.phonebook.filter.toLowerCase())
    )
  );
  const dispatch = useDispatch();

  const onDeleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id}>
          <span>{name}</span>
          <span>{number}</span>
          <button
            className={css.contactListButton}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
