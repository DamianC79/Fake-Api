import React, {useState} from 'react';
import './App.css'
import Books from './Books.js';
import Users from './Users.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


  

function App() {

  const [books,obtenerBooks]=useState({});

  const consultarAPI = async () => {
    const api = await fetch('https://fakerapi.it/api/v1/books?_quantity=5');
    const books = await api.json();
    obtenerBooks(books.data); 
    console.log(api)
    console.log(books)
    
  }
    
 
    
  console.log(books);
  return (
    <>
        <Router>

          <Switch>

            <Route path="/users">
              <h1>USERS</h1>    
            </Route>

            <Route path="/">
              <h1>BOOKS</h1>
            </Route>

          </Switch>

        </Router>

      <div >

        <Books 
        books={books}
        />
        <button className="button" onClick={ consultarAPI }
          > Buscar 
        </button>

      </div>
      </>
    );
}

export default App;
