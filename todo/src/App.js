import { Button } from "./Components/Syles/Button.style";
import { AppContainer } from "./Components/Syles/Container.style";
import { useState, useEffect } from "react";
import AddTask from "./Components/AddTask";
import TaskContainer from "./Components/TaskContainer";
import addIcon from './icons/add.svg'
import Task from "./Components/Task";


function App() {
  const [tasks,setTasks]=useState([])
  const [addTask,setAddTask]=useState(true)
  const changeAddTask = ()=>{
    setAddTask((prevState)=>!prevState)
  }
  
  return (
    <>
      <AppContainer>
        <button disabled={addTask} onClick={changeAddTask} >
          <img src={addIcon}/>
        </button>
        {addTask && <AddTask setAddTask={setAddTask} setTasks={setTasks} tasks={tasks}/>}
        {/* <TaskContainer tasks={tasks} setTasks={setTasks}/> */}
        {tasks.map((item)=>( 
            
            <Task item={item} setTasks={setTasks} tasks={tasks} />
            
    ))}
      </AppContainer>
    </>
  );
}

export default App;
