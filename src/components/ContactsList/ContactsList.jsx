import PropTypes from 'prop-types';
import { ContactsListitem } from 'components/ContactsListitem/ContactsListitem';
import css from '../../components/ContactsList/ContactsList.module.css';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <div className={css.contactsList__box}>
      {/* <h2 className={css.title}>Contacts List</h2> */}
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id} className={css.item}>
            <ContactsListitem name={name} number={number} />

            <button onClick={() => onDeleteContact(id)} className={css.btn}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
