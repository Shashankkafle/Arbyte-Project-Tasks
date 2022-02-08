import  CheckIcon from '../icons/check.svg'
import { useEffect } from 'react';

const Task = ({item,setTasks,tasks,name}) => {
    const removeTask = (e)=>{
        let newTasks=tasks
        console.log(setTasks)
       newTasks= newTasks.filter(instance => instance!==e.target.id)
       setTasks(newTasks)
       localStorage.setItem(name,newTasks)
    }
  return (
        <li >
            <button  onClick={(e)=>removeTask(e)}>
                <img id={item} src={CheckIcon}/>    
            </button>
            {item}
        </li>
    );
};

export default Task;
