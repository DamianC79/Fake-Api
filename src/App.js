import React, {useState} from 'react';
import styled from '@emotion/styled';
import Books from './Books';



function App() {

  const [books,obtenerBooks]=useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://fakerapi.it/api/v1/books?_quantity=1');
    const books = await api.json();
    obtenerBooks(books); 
  }
    
  const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top:5rem;
  flex-direction:column;
`;
    
    return (
      <Contenedor >
        <Books
          books ={books}
        />
        <button 
          onClick={ consultarAPI }
        >
          Obtener Resultados
        </button>
      </Contenedor>
    );
}

export default App;
