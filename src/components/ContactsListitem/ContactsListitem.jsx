import PropTypes from 'prop-types';
import css from '../../components/ContactsListitem/ContactsListitem.module.css';

export const ContactsListitem = ({ name, number }) => {
  return (
    <div className={css.contact_box}>
      <p>{name}:</p>
      <p>{number}</p>
    </div>
  );
};

ContactsListitem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
