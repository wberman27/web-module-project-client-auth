import React from 'react'
import '../App.css'
import axios from 'axios'
import PrivateRoute from './PrivateRoute'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false,
        error: false,
    }

    handleChange = (e) =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({isLoading: true})
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res =>{
            // console.log(res)
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends')
            this.setState({isLoading:false})
            this.setState({error:false})
        })
        .catch(err =>{
            console.log('LOGIN ERROR: ', err, err.response)
            this.setState({isLoading:false})
            this.setState({error:true})
        })

    }

    handleCheckBox = () =>{
        const checkBox = document.getElementById('passID')
        if(checkBox.type === 'password'){
            checkBox.type = 'text';
        }else{
            checkBox.type = 'password'
        }
    }

    render(){
        return(
            <div className= 'form-wrapper'>
                {localStorage.getItem('token') ? <h3>You are already logged in.</h3> : 
                
                <>
                <form id='inputForm'>
                    <label>Account
                    <input type='text' name='username' onChange = {this.handleChange} value={this.state.credentials.username} placeholder='enter username'/>
                    </label>
                    
                    <label>Password
                    <input id ='passID' type='password' name='password' onChange = {this.handleChange} value={this.state.credentials.password} placeholder='enter password'/>
                    </label>
                    <label>Show Password
                    <input type='checkbox' onClick={this.handleCheckBox}/>
                    </label>

                </form>
                <form id ='submitForm' onSubmit = {this.handleSubmit}>
                {this.state.isLoading ? <h3>Loading...</h3> : null}
                {this.state.error ? <p id='loginError'>Username/Password is incorrect.</p> : null}
                <button>Log in</button>
                </form>
                </>
                }
            </div>

        );
    }
}

export default Login