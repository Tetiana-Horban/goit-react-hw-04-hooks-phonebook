import styled from 'styled-components';
import images from './images/bg.png';

const AppWrapper = styled.div`
  background-image: url('${images}');
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
`;
const Title = styled.h2`
  font-size: 35px;
  font-style: italic;
  text-align: center;
  color: blue;
`;
export { AppWrapper, Title };
