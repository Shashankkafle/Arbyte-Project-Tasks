import Task from "./Task";
import {List} from "../Components/Syles/List.style";

const TaskList = ({setTasks,tasks,name}) => {

    if(tasks==null||tasks.lengh<1){
        return <div>No tasks available</div>
    }
  return (
        <List>
           {tasks.map((item)=>(
               <Task key={item} item={item} setTasks={setTasks} name={name} tasks={tasks}/>
           ))}
        </List>
    );
};

export default TaskList;
