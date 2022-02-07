import{useState,useEffect, createContext} from 'react';
 import React from 'react';

 const Context = createContext()
 
export const ContextProvider = ({children}) => {
    const [tasks,setTasks]=useState([])
    const [addTask,setAddTask]=useState(true)

    const deleteTask=(id)=>{

    }
    const addTask=()=>{

    }
    return(
        <Context.Provider value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback
        }}>
            {children}
        </Context.Provider>
    )
 };

export default Context

 