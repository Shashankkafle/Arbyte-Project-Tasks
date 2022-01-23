import React from 'react';
import { UserList } from "./UserList";

export const SearchBar = ({setName,name,setData}) => {
  async function findUsers(){
    console.log(name)
    var a= await fetch("https://api.github.com/users/"+name)
    a=await a.json()
    setData(a)


    
  }
  const onSubmitHandler = () =>{
    setName(document.getElementById('username').value)
  }
  return (
    <form onSubmit={ (e)=>{ e.preventDefault()
                            onSubmitHandler()}}>
      <input required autoFocus placeholder='Username'  id='username'></input>
      <button>Search</button>
    </form>
  )
};
