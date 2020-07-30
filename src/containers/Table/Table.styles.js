import styled from 'styled-components';

const MainTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-grow: 1; */
  width: 70%;
  `;

const TableElement = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 0;
  background-color: #fdc;
  border: 2px solid darkblue;
  font-weight: normal;

  &:hover {
    cursor: pointer;
  }

  >h3 {
    width: 50%;
  }

  >div {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const ElementLabel = styled.span`
  margin: 2px 4px;
  padding: 7px;
  color: white;
  font-weight: bolder;
  background-color: #ff5400;
  border: .6px solid white;
  border-radius: 5px;
`;

export { MainTableContainer, TableElement, ElementLabel }