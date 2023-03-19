import PropTypes from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
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

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
