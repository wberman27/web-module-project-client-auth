import axios from 'axios'



//keeps code dry
export const axiosWithAuth = () =>{

    const token = localStorage.getItem('token')

    return axios.create({
                baseURL: 'http://localhost:5000',
                headers:{
                    authorization: token
                }

            })
}