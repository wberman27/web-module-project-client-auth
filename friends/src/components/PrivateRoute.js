import React from 'react'
import {Route, Redirect} from 'react-router-dom'


//allows for token requirement to reach a route
const PrivateRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props)=>{
        if(localStorage.getItem('token')){
            return <Component {...props} />
        }else{
            return <Redirect to=''/>
        }
    }}/>
}

export default PrivateRoute