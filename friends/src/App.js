import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login'


function App() {
  return (
    <Router>
      <div className='Nav'>
        <h1> Imaginary Friends </h1>
        <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>

        </ul>
      </div>
      
      <div className="App">
      <Switch>  
        <Route path='/login' component={Login} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
