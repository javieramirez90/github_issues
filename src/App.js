import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import NavBar from './containers/NavBar/NavBar';
import Table from './containers/Table/Table';
import Modal from './containers/Modal/Modal';

const AppContainer = styled.section`
  width: 100vw;
  /* max-height: 100vh; */
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center
`;

function App() {
  const [responses, setResponses] = useState([]);
  const [hide, setHide] = useState(true);
  const [modalInfo, setModalInfo] = useState(null);

  const handleModalVisibility = data => {
    setModalInfo(data);
    setHide(hide => !hide);

  };

  useEffect(() => {

  }, [responses, hide])

  return (
    <AppContainer >
      <Modal
        hide={hide}
        setHide={setHide}
        modalInfo={modalInfo}
      />
      <NavBar
        setResponses={setResponses}
      />
      <Table
        responses={responses}
        handleModalVisibility={handleModalVisibility}
      />
    </AppContainer>
  );
}

export default App;
