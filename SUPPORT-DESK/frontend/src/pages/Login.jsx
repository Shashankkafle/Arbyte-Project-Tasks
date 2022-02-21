import { useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { toast } from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {login}  from  '../features/auth/authSlice'

function Login() {
    const  [formData,setFormData] = useState({ 
        email:'',
        password:'',
    })
    const  {email,password}  = formData
    const dispach = useDispatch()
    const {user, isLoading, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    const onChange= (e)=>{
       setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: [e.target.value]
       }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        console.log('hello')
        const userData = {
            email,
            password,
        }
        dispach(login(userData))
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaSignInAlt></FaSignInAlt> Login
            </h1>
            <p>Please login.</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input required type="email" className="form-control" name='email'  id="email" value={email} onChange={onChange} placeholder="Enter your email" />            
                </div>
                <div className="form-group">
                    <input required type="password" className="form-control" name='password'  id="password" value={password} onChange={onChange} placeholder="Enter your password" />            
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>    
        </section>
    </>
  )
}

export default Login