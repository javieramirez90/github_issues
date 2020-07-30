import React from 'react';
import  { MainTableContainer, TableElement, ElementLabel } from './Table.styles';

export default function Table({ responses, handleModalVisibility }) {
  return (
    <MainTableContainer>
      {
        responses.map(element => (
          <TableElement onClick={() => handleModalVisibility(element)}>
            <h3>{element.title}</h3>
            <div>
              {element.labels.map(label => (
                <ElementLabel>{label.name}</ElementLabel>
              ))}
            </div>
          </TableElement>
        ))
        }
    </MainTableContainer>
  )
}
