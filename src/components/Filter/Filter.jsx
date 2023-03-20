import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phoneBookSlice';
import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = evt => {
    const { value: newFilterValue } = evt.currentTarget;
    dispatch(filterContacts(newFilterValue));
  };

  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        // value={value}
        onChange={changeFilter}
      />
    </label>
  );
};

export default Filter;
