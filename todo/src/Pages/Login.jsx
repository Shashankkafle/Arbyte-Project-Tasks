import { useState } from "react";
import {ReactComponent as LoginIcon} from '../icons/log-in.svg'
import Icon from '../icons/log-in.svg'
import{Link,useNavigate} from 'react-router-dom' 
import {Form} from "../Components/Syles/Input.style";
import {Header} from "../Components/Syles/Header.style";
import { Button } from "../Components/Syles/Button.style";


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
        <>
            <Header>Login</Header>
            <Form onSubmit={(e)=>handleSubmit(e)}>

                <label>
                    Enter Name:
                        <input  placeholder='Name' type='text' value={text} onChange={handleChange}></input>          
                </label>   

                <Button type='submit' >
                <img src={Icon}/>
                </Button>

            </Form>
        </>
    );
};

export default Login;
