import PropTypes from 'prop-types';
import { FilterInput, TextFilter, InputFilter } from './Filter.styled';

const Filter = ({ onChange }) => {
  return (
    <FilterInput>
      <label>
        <TextFilter>Find contacts by name</TextFilter>
        <br />
        <InputFilter type="text" onChange={onChange} />
      </label>
    </FilterInput>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
};
export default Filter;
