import { Button } from "./Components/Syles/Button.style";
import { AppContainer } from "./Components/Syles/Container.style";
import { useState, useEffect } from "react";
import AddTask from "./Components/AddTask";
import TaskPage from "./Pages/TaskPage";
import Login from "./Pages/Login";
import addIcon from './icons/add.svg'
import Task from "./Components/Task";
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'



function App() {
  const[name,setName]=useState('')
  const [tasks,setTasks]=useState([])
  const [addTask,setAddTask]=useState(false)
  const changeAddTask = ()=>{
    setAddTask((prevState)=>!prevState)
  }
  useEffect(()=>{
    if(name!==''&&localStorage.getItem(name)!==null){
      setTasks(localStorage.getItem(name).split(','))
    }
    
  },[name])
  
  return (
    <>

      
        <Router>
          <Routes>
            <Route path='/'  element={<Login setName={setName}/>}/>
            <Route path='/tasks'  element={<TaskPage tasks={tasks} name={name} setTasks={setTasks}/>}/>
          </Routes>
        </Router>
        

    </>
  );
}

export default App;
