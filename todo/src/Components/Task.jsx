import {ReactComponent as CheckIcon} from '../icons/square-check-solid.svg'
import { useEffect } from 'react';
import { Button } from './Syles/Button.style';

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
            <Button  onClick={(e)=>removeTask(e)}>
                {/* <CheckIcon id={item} />                   */}
                <CheckIcon fill='#FFFFFF'/>
            </Button>
            <span>{item}</span>
           
        </li>

    );
};

export default Task;
