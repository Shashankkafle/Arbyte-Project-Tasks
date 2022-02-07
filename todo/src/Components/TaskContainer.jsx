
import Task from "./Task";

const TaskContainer = ({tasks}) => {
    console.log(tasks)
    if(tasks==null||tasks.length==0){
        return <div>No tasks available</div>
    }
  return (
        <div>
            {tasks.map((item)=>( 
            
            <Task item={item}/>

        ))}
        </div>
    );
};

export default TaskContainer;
