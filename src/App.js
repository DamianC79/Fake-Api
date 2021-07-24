import React from 'react';
import Books from './Books.js';
import Users from './Users.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

    return (
      <>
        <Router>

          <Switch>

            <Route exact path="/" component={Books}/>
            <Route exact path="/users" component={Users}/>

          </Switch>

        </Router>
      </>
    );
}

export default App;
