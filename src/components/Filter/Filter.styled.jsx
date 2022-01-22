import styled from 'styled-components';

const FilterInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TextFilter = styled.span`
  display: block;
  text-align: center;
  font-size: 20px;
`;
const InputFilter = styled.input`
  width: 200px;
  height: 30px;
  border-radius: 10px;
`;
export { FilterInput, TextFilter, InputFilter };
