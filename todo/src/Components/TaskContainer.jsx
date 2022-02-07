import Task from "./Task";

const TaskContainer = ({tasks,setTasks}) => {
    const removeTask = (item)=>{
        let newTasks=tasks
        console.log('hello')
        newTasks.filter(instance => instance!=item)
        setTasks(newTasks)
    }
    console.log(tasks)
    if(tasks==null||tasks.length==0){
        return <div>No tasks available</div>
    }
  return (
        <ul>
            {tasks.map((item)=>( 
            
                <Task item={item} removeTask={removeTask}/>
                
        ))}
        </ul>
    );
};

export default TaskContainer;
