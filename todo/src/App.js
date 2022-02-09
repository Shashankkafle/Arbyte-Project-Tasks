import { useState, useEffect } from "react";
import TaskPage from "./Pages/TaskPage";
import Login from "./Pages/Login";

import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'



function App() {
  const[name,setName]=useState('')
  const [tasks,setTasks]=useState([])
  const [addTask,setAddTask]=useState(false)
  useEffect(()=>{
    if(localStorage.getItem(name)!=null){
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
