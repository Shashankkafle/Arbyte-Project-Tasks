import { useState } from "react";

const AddTask = ({name,setAddTask,setTasks}) => {
    const[text,setText] =useState('')  
    console.log(name)
    const handleSubmit = (e)=>{
        e.preventDefault()
        let newTasks=[] 
        console.log()
        if(localStorage.getItem(name)!==null){
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

            <form onSubmit={handleSubmit}>
                <h2>
                    Enter the new task.
                </h2>
                    <input onChange={handleTextChange} type='text' value={text} placeholder='Write a Task.'/>
                    <button type='submit'>Send</button>
            </form>
    );
};

export default AddTask;
