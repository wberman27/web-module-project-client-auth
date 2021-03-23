import React from 'react'
import '../App.css'
import {axiosWithAuth} from '../utils/axiosWithAuth'


class Friends extends React.Component {
    state = {
        friends: []
    }

    componentDidMount(){
        this.getData();
    }

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

    render(){
        return(
            this.state.friends.map(item =>{
                return <div key={item.id} className='friend'>
                            <h3>{item.name}</h3>
                            <p>Age: {item.age}</p>
                            <p>Email: {item.email}</p>
                        </div>
            })
        )
    }
}

export default Friends