import { useState } from "react";
import TaskList from "../Components/TaskList";
import AddTask from "../Components/AddTask";
import {ReactComponent as AddIcon} from '../icons/collapse-plus.svg'
import {ReactComponent as HomeIcon} from '../icons/homepage.svg'
import { Button } from "../Components/Syles/Button.style";
import{Link,useNavigate} from 'react-router-dom' 
import { NavBar } from "../Components/Syles/NavBar.style";


const TaskPage = ({tasks,setTasks,name}) => {
  const [addTask,setAddTask]=useState(true)
  const navigate=useNavigate()

  const changeAddTask = ()=>{
    setAddTask((prevState)=>!prevState)
  }
  return (
      <>
        <NavBar>
          <Button>
            <AddIcon fill='#FFFFFF' onClick={changeAddTask}></AddIcon>
            
          </Button>
          <p>Add New Task</p>
          <Button>
            <HomeIcon fill='#FFFFFF' onClick={()=>navigate('/') }/>
          </Button>
          <p>Home</p>
          
        </NavBar>

        {addTask&&<AddTask name={name} setAddTask={setAddTask} setTasks={setTasks}/>}
        <TaskList tasks={tasks} setTasks={setTasks} name={name}/>
      </>      
  );
  }
export default TaskPage;
