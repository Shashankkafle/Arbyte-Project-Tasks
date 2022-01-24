import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
export const UserList = ({query,profiles,setProfiles,setUser}) => {
  useEffect(() => {
    if(query!='')
    listResult()    
  },[query]);
  
  async  function  listResult(){
    var a= await fetch("https://api.github.com/search/users?q="+query+"in:user")
    a=await a.json()
    setProfiles([])
    a.items.forEach(user => {
     
      setProfiles( profiles => [...profiles, {
        id : profiles.length,
        login : user.login,
        avatar : user.avatar_url,
      }])
    });
  }

   return( 
            <ul  id='listContainer' >
               <Link  to='/Profile'>   
                { 
                  profiles.map(p => (
                      <li id={p.login} 
                        onClick={(e)=>{
                                  setUser(e.target.id)   }}>
                        <img src={p.avatar} style={{'height':'50px', 'width':'50px'}} ></img>
                        {p.login}
                      </li>
                    ))
                }
               </Link>  
            </ul>
   )
};
