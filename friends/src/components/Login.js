import React from 'react'
import '../App.css'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }


    render(){
        return(
            <div className= 'form-wrapper'>
                <form>
                    <label>Account
                    <input type='text' name='username' onChange = {()=>{}} value={this.state.credentials.username} placeholder='enter username'/>
                    </label>
                    
                    <label>Password
                    <input type='text' name='password' onChange = {()=>{}} value={this.state.credentials.password} placeholder='enter password'/>
                    </label>

                </form>

                <button onSubmit = {()=>{}}>Log in</button>

            </div>

        );
    }
}

export default Login