import { Button } from "./Components/Syles/Button.style";
import { AppContainer } from "./Components/Syles/Container.style";
import { useState, useEffect } from "react";
import AddTask from "./Components/AddTask";
import TaskContainer from "./Components/TaskContainer";

function App() {
  const [tasks,setTasks]=useState([])
  const [addTask,setAddTask]=useState(true)
  useEffect(()=>{
    
  })
  const changeAddTask = ()=>{
    setAddTask((prevState)=>!prevState)
    console.log(tasks)
  }
  return (
    <>
      <button onClick={changeAddTask} >AddTask</button>
      {addTask && <AddTask setAddTask={setAddTask} setTasks={setTasks} tasks={tasks}/>}
      <TaskContainer tasks={tasks}/>
    </>
  );
}

export default App;
