import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { MainContainer, MasterInput } from './NavBar.js.style';

export default function NavBar({ setResponses }) {

  const [ info, setInfo ] = useState(null);
  const [ counter, setCounter ] = useState(null);
  const [ apiResponse, setApiResponse ] = useState(null);

  const githubURL = "https://api.github.com/repos/facebook/react/issues";

  const handleChange= e => {
    let infoCopy = info
    infoCopy = e.target.value;
    setInfo(infoCopy);
    if(counter % 3 === 0){
      handleRequest()
    }
  };

  const handleRequest = () => {
      axios.get(githubURL, { labels: [info]})
      .then(response => {
        setCounter(0);
        setResponses(response.data);
      })
      .catch(err => console.error(err))
  };

  return (
    <MainContainer>
    <h1>Recuerda que es muy probable que el tema con el que tienes temas seguro ya alguien lo resolvió. Consulta....</h1>
      <MasterInput
        placeholder="Buscar issue..."
        onKeyPressCapture={()=> setCounter(counter => counter+1)}
        onChange={e => handleChange(e)}
      />
    </MainContainer>
  )
};
