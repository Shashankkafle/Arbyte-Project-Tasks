import { useState, useEffect } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from 'react-toastify'
import {useSelector,useDispatch} from 'react-redux'
import {register, reset}  from  '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'
function Register() {
    const  [formData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',

    })
    const  {name,email,password,password2}  = formData

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, isLoading, isSuccess, isError, message } = useSelector(
        (state) => state.auth
    )
    useEffect(()=>{
        if(isError){
            toast.error(message)
            console.log(message)
        }
        console.log(isSuccess||user)
        if(isSuccess||user){
            navigate('/')
        }
        dispatch(reset())
    },[isError,isSuccess,user,message,dispatch,navigate])
    

    const onChange= (e)=>{
       setFormData((prevState)=>({
            ...prevState,
            [e.target.name]: e.target.value,
       }))
    }
    const onSubmit = (e)=>{
        e.preventDefault()
        if(password.toString() !== password2.toString()){
            toast.error('Passwords dont match.')
            console.log('Passwords dont match.')
        }else{
            const userData = {
                name,
                email,
                password,
            }
            console.log(userData)
            console.log(formData)
            dispatch(register(userData))
        }
    }
  return (
    <>
        <section className="heading">
            <h1>
                <FaUser></FaUser> Register 
            </h1>
            <p>Please connect an account</p>
        </section>
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <input required type="text" className="form-control" name='name'  id="name" value={name} onChange={onChange} placeholder="Enter your name" />            
                </div>
                <div className="form-group">
                    <input required type="email" className="form-control" name='email'  id="email" value={email} onChange={onChange} placeholder="Enter your email" />            
                </div>
                <div className="form-group">
                    <input required type="password" className="form-control" name='password'  id="password" value={password} onChange={onChange} placeholder="Enter your password" />            
                </div>
                <div className="form-group">
                    <input required type="password" className="form-control" name='password2'  id="password2" value={password2} onChange={onChange} placeholder="Confirm password" />            
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-block">Submit</button>
                </div>
            </form>    
        </section>
    </>
  )
}

export default Register


