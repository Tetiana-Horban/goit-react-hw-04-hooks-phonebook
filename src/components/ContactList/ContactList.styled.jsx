import styled from 'styled-components';

const ContactWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  align-items: center;
  list-style: square;
  color: darkblue;
`;
const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
export { ContactWrapper, ContactItem };
