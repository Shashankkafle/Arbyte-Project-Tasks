import Task from "./Task";

const TaskList = ({setTasks,tasks,name}) => {

    if(tasks==null||tasks.lengh<1){
        return <div>No tasks available</div>
    }
  return (
        <div>
           { console.log(tasks)}
           {tasks.map((item)=>(
               <Task key={item} item={item} setTasks={setTasks} name={name} tasks={tasks}/>
           ))}
        </div>
    );
};

export default TaskList;
