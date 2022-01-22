import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Label = styled.label`
  margin-bottom: 15px;
`;
const Text = styled.span`
  display: block;
  font-size: 20px;
`;

const Input = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
`;
const ButtonSubmit = styled.button`
  border-radius: 10px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 30px;
  background-color: lightgrey;
  border: 2px solid;
  font-size: 15px;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;
export { Form, Label, Text, Input, ButtonSubmit };
