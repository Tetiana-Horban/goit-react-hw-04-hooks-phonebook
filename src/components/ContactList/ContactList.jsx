import ContactListItem from '../ContactListItem/ContactListItem';
import PropTypes from 'prop-types';
import { ContactWrapper, ContactItem } from './ContactList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <ContactWrapper>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </ContactItem>
      ))}
    </ContactWrapper>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};
export default ContactsList;
