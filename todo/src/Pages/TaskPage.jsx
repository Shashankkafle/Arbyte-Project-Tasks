import { useState } from "react";
import TaskList from "../Components/TaskList";
import AddTask from "../Components/AddTask";
import {ReactComponent as AddIcon} from '../icons/collapse-plus.svg'
import{Link,useNavigate} from 'react-router-dom' 


const TaskPage = ({tasks,setTasks,name}) => {
  const [addTask,setAddTask]=useState(true)
  const navigate=useNavigate()

  const changeAddTask = ()=>{
    setAddTask((prevState)=>!prevState)
  }
  return (
      <>
        <AddIcon fill='#ECF8F8' onClick={changeAddTask}></AddIcon>
        <button  onClick={()=>navigate('/')} >
          go home
        </button>
        {addTask&&<AddTask name={name} setAddTask={setAddTask} setTasks={setTasks}/>}
        <TaskList tasks={tasks} setTasks={setTasks} name={name}/>
      </>      
  );
  }
export default TaskPage;
