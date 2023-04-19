import PropTypes from 'prop-types';
import css from '../../components/FilterContacts/FilterContacts.module.css';

export const FilterContacts = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name <br />
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={css.input}
      />
    </label>
  );
};

FilterContacts.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
