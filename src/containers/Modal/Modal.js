import React, { useState, useEffect } from 'react'
import { MainModal } from './Modal.style';

export default function Modal({ hide, setHide, modalInfo }) {
  const [infoGiven, setInfoGiven] = useState(null);
  useEffect(() => {
    setInfoGiven(modalInfo);
  }, [modalInfo, ])

  return (
    <MainModal hide={hide}>
    {infoGiven ?
      <>
        <h2>{modalInfo.title}</h2>
        <p>{modalInfo.body}</p>
        <div>
          <a href={modalInfo.html_url} target="_blank" >Ir al sitio</a>
          <button onClick={() => setHide(hide => !hide)}>Cerrar</button>
        </div>
      </> :
      <div>Cargando...</div>
    }

    </MainModal>
  )
}
