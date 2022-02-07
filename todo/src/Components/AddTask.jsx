import { useState } from "react";

const AddTask = ({setAddTask,setTasks,tasks}) => {
    const[text,setText] =useState('')  

    const handleSubmit = (e)=>{
        e.preventDefault()
        let newTasks=tasks
        newTasks.push(text.toString())
        localStorage.setItem(tasks.length,text.toString())
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
