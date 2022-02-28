import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users'

//Register users

const register   = async (userData )=> {
    const response = await axios.post('http://localhost:5000/api/users/register',userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
   return response.data
}
const logout = () => localStorage.removeItem('user')

const login = async(userData) => {
    const response = await axios.post('http://localhost:5000/api/users/login',userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
    
}


const authService = {
    register,
    logout,
    login
} 

export default authService

   