import styled from 'styled-components';

const Button = styled.button`
  border-radius: 10px;
  margin-left: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 20px;
  background-color: lightgrey;
  border: 1px solid;
  font-size: 12px;
  cursor: pointer;
  :hover {
    background-color: grey;
  }
`;
export default Button;
