import React from 'react'
import '../App.css'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false
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
            this.setState({isLoading:false})
        })
        .catch(err =>{
            console.log('LOGIN ERROR: ', err, err.response)
        })

    }

    handleCheckBox = (e) =>{
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
                <button>Log in</button>
                </form>
            </div>

        );
    }
}

export default Login