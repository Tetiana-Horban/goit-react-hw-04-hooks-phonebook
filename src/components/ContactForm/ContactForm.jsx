import { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Label, Text, Input, ButtonSubmit } from './ContactForm.styled';

class ContactForm extends Component {
  state = { name: '', number: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  resetForm = () => {
    return this.setState({ name: '', number: '' });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  render() {
    const { handleChange, handleSubmit } = this;
    const { name, number } = this.state;
    return (
      <Form onSubmit={handleSubmit}>
        <Label>
          <Text> Name </Text>
          <br />
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          <Text> Number</Text>
          <br />
          <Input
            type="tel"
            value={number}
            onChange={handleChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
