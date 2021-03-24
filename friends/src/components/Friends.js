import React from 'react'
import '../App.css'
import {axiosWithAuth} from '../utils/axiosWithAuth'


class Friends extends React.Component {
    state = {
        friends: [],
        friend: {
            id: '',
            name: '',
            age: '',
            email: '',
        }
    }

    //on page load get data
    componentDidMount(){
        this.getData();
    }


    //request api for data, set friends array to data
    getData = () =>{
        axiosWithAuth()
        .get('/api/friends')
        .then(res =>{
            // console.log(res)
            this.setState({friends: res.data})
        })
        .catch(err =>{
            console.log('FETCH DATA ERROR: ', err, err.reponse)
        })
    }

    //set friend to values of inputs
    handleChange = (e) =>{
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })
    }
    
    //add friend to friends in api
    handleAdd = (e) =>{
        e.preventDefault();
        axiosWithAuth()
        .post('/api/friends', this.state.friend)
        .then(res =>{
            this.setState({friends: res.data})
        })
        .catch(err =>{
            console.log('POST NEW FRIEND ERROR: ', err, err.response)
        })
        
    }
    render(){
        return(
            <>
            <form id='addFriendForm' onSubmit={this.handleAdd}>
                <label>Name: <input type='text' name='name' value = {this.state.friend.name} onChange={this.handleChange}/></label>
                <label>Age: <input type='text' name='age'  value = {this.state.friend.age} onChange={this.handleChange}/></label>
                <label>Email: <input type='email' name='email' value = {this.state.friend.email}  onChange={this.handleChange}/></label>
                <button id='addFriendButton'>Add Friend</button>
            </form>
            {
            this.state.friends.map(item =>{
                return <div key={item.id} className='friend'>
                            <h3>{item.name}</h3>
                            <p>Age: {item.age}</p>
                            <p>Email: {item.email}</p>
                        </div>
            })
            }
            </>
        )
    }
}

export default Friends