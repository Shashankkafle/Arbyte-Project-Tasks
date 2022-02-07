import  CheckIcon from '../icons/check.svg'
import { useEffect } from 'react';

const Task = ({item,setTasks,tasks}) => {
    const removeTask = (item)=>{
        let newTasks=tasks
        newTasks.filter(instance => instance!=item)
        setTasks(newTasks)
    }
  return (
        <li>
            <button onClick={removeTask(item)}>
                <img src={CheckIcon}/>    
            </button>
            {item}
        </li>
    );
};

export default Task;
