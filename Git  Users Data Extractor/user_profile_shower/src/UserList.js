import React from 'react';
import { useState,useEffect } from 'react';
export const UserList = ({query}) => {
  const  [profiles,setProfiles]=useState([])
  useEffect(() => {
    listResult()    
  },[query]);
  
  async  function  listResult(){
    var a= await fetch("https://api.github.com/search/users?q="+query+"in:user")
    a=await a.json()
    console.log(a)
    setProfiles([])
    a.items.forEach(user => {
     
      setProfiles( profiles => [...profiles, {
        id : profiles.length,
        login : user.login,
        avatar : user.avatar_url
      }])
    });
    console.log(profiles)
  }
  
  // console.log(profiles)
   return( <ul>{profiles.map(p => (<li className='listContainer'>{p.login}<img src={p.avatar} style={{'height':'50px', 'width':'50px'}} ></img></li>))}</ul>)
};
