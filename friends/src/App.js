import React from 'react'
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'

import './App.css';
import Login from './components/Login'
import Friends from './components/Friends'
import {axiosWithAuth} from './utils/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'

const logOut = () =>{
  axiosWithAuth()
  .post('/api/logout')
  .then(res =>{
    localStorage.removeItem('token')
  })
  .catch(err =>{
    console.log('LOGOUT ERROR: ', err, err.response)
  })
}



function App() {
  return (
    <Router>
      <div className='Nav'>
        <h1> Imaginary Friends </h1>
        <ul>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/login' onClick={logOut}>Logout</Link>
            </li>
            <li>
              <Link to='/friends'>Friends</Link>
            </li>

        </ul>
      </div>
      
      <div className="App">
      <Switch>  
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={Friends} /> {/*Private Route, requires token */}
      </Switch>
      </div>
    </Router>
  );
}

export default App;
