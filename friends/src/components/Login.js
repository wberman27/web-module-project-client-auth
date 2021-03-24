import React from 'react'
import '../App.css'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        },
        isLoading: false,
        error: false,
    }

    //set input values to our credentials state
    handleChange = (e) =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    //on log in submit, set isloading to true, request api and with our credentials, set token in localstorage to res.data.payload
    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({isLoading: true})
        axios.post('http://localhost:5000/api/login', this.state.credentials)
        .then(res =>{
            // console.log(res)
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/friends')
            //no longer loading, have no error message
            this.setState({isLoading:false})
            this.setState({error:false})
        })
        .catch(err =>{
            console.log('LOGIN ERROR: ', err, err.response)
            //no loading, display error message
            this.setState({isLoading:false})
            this.setState({error:true})
        })

    }

    //allow client to show/hide password with checkbox
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
                    {this.state.error ? <p id='loginError'>Username/Password is incorrect.</p> : null}
                    <label>Show Password
                    <input type='checkbox' onClick={this.handleCheckBox}/>
                    </label>

                </form>
                <form id ='submitForm' onSubmit = {this.handleSubmit}>
                {this.state.isLoading ? <h3>Loading...</h3> : null}
                <button>Log in</button>
                </form>
                </>
                }
            </div>

        );
    }
}

export default Login