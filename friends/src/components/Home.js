import React from 'react'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    render(){
        return(
            <div>
            {localStorage.getItem('token') 
            
            ?

            <><h2>Home Page</h2>
            <h4>Welcome, Lambda School</h4>
            <p>You are logged in.</p>
            <Link to='/friends'>Go to Friends</Link></> 
            
            :

            <>
            <h2>Welcome, please log into your account.</h2>
            <Link to='/login'>Login</Link>
            </>
            }
            </div>
        )
    }
}
export default Home