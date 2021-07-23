import React, {useState} from 'react';
import Books from './Books';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


  

function App() {

  const [books,obtenerBooks]=useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://fakerapi.it/api/v1/books?_quantity=5');
    const books = await api.json();
    obtenerBooks(books[0]); 
    console.log(api)
    console.log(books)
    
  }
    
 
    
    return (
      <>
        <Router>

          <Switch>

            <Route path="/">
              <h1>Books</h1>    
            </Route>

            <Route path="/users">
              <h2>Users</h2>
            </Route>

          </Switch>

        </Router>

      <div >

        <Books
          books ={books}
        />
        <button onClick={ consultarAPI }
          > Buscar 
        </button>

      </div>
      </>
    );
}

export default App;
