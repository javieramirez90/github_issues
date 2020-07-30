import styled from 'styled-components';

const MainContainer =  styled.div`
  width: 100%;
  height: auto;
  margin: 10% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >h1 {
    width: 50%;
    margin-bottom: 2%;
  }
`;

const MasterInput =  styled.input`
  width: 50%;
  padding: 15px;
  background-color: lightgray;
`;


export { MainContainer, MasterInput };