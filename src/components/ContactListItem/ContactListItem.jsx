import PropTypes from 'prop-types';
import Button from './ContactList.styled';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactListItem;
