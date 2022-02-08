import { useState } from "react";
import {ReactComponent as LoginIcon} from '../icons/log-in.svg'
import Icon from '../icons/log-in.svg'
import{Link,useNavigate} from 'react-router-dom' 

const Login = ({setName,name,handleLogin}) => {
    const[text,setText]=useState('')
    const navigate=useNavigate()
    const handleChange = (e)=>{
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        setName(text)
        navigate('./tasks')
    }
  return (
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input  placeholder='Name' type='text' value={text} onChange={handleChange}></input>
            <button type='submit' >
            <img src={Icon}/>
            </button> 
        </form>
    );
};

export default Login;
