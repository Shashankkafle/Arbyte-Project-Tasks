import { useState } from "react";
import {Form} from "../Components/Syles/Input.style";
import { Button } from "../Components/Syles/Button.style";
import CheckIcon from '../icons/greater-than-solid.svg'


const AddTask = ({name,setAddTask,setTasks}) => {
    const[text,setText] =useState('')  
    console.log(name)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setTasks([])
        let newTasks=[] 
        console.log(text)
        if(localStorage.getItem(name)!==null&&localStorage.getItem(name)!==''){
            {
                newTasks=localStorage.getItem(name).split(',')
            }
            
        }      
        if(newTasks.includes(text.toString())){
            alert('Task alerady exists.')
            return
        }
        if(text.toString()!==''){
            newTasks.push(text.toString())
        }
        console.log(newTasks)
        localStorage.setItem(name,newTasks)
        setTasks(newTasks)
        setAddTask(false)
    }
    const handleTextChange =(e)=>{  
        setText(e.target.value)
    }
  return (

            <Form onSubmit={handleSubmit}>
                <label>
                    Enter the new task.
                    <input onChange={handleTextChange} type='text' value={text} placeholder='Task'/>
                </label>
                <Button type='submit'>
                    <img src={CheckIcon}/>
                </Button>
            </Form>
    );
};

export default AddTask;
