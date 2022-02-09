import {ReactComponent as CheckIcon} from '../icons/square-check-solid.svg'
import { useEffect,useState } from 'react';
import { Button } from './Syles/Button.style';
import { List } from './Syles/List.style';

const Task = ({item,setTasks,tasks,name}) => { 
    const removeTask = (e)=>{
        let newTasks=tasks
        console.log(item)
        console.log(e.target.id)
       newTasks= newTasks.filter(instance => instance!==e.target.id)
       setTasks(newTasks)
       localStorage.setItem(name,newTasks)
    }
  return (

        <li >
            <CheckIcon id={item}  onClick={(e)=>removeTask(e) } style={{
                width:'40px',
                height:'40px'
            }}/>
            <span>{item}</span>           
        </li>

    );
};

export default Task;
