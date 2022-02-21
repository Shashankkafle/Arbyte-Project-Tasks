import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users'

//Register users

const register   = async (userData )=> {
    const response = await axios.post('http://localhost:5000/api/users/register',userData)
    console.log(response)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    console.log(response)
    return response.data
}

const authService = {
    register
} 

export default authService

   