import React from 'react';
import { useState,useEffect } from 'react';

export default function Profile({user}) {
    useEffect(() => {
        if(user!='')
        showProfile()    
      },[user]);
    const [detailes,setDetailes]=useState([])

    async function showProfile(){
        var a= await fetch("https://api.github.com/users/"+user)
        a=await a.json() 
        console.log(a)
        var followers= await fetch(a.followers_url)
        followers=await followers.json()  

        // var public_repos= await fetch(a.public_repos_url,{
        //     method: "GET",
        //     headers: {
        //       Authorization: 'token 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' 
        //     }
        //   })
        // console.log(public_repos)   
        // var public_repos= await public_repos.json()     
        // console.log(public_repos)   
           
        var organizations= await fetch(a.organizations_url)
        organizations=await organizations.json()       
        setDetailes( [ {
            login : a.login,
            avatar : a.avatar_url,
            bio : a.bio,
            blog : a.blog,
            company : a.company,
            email : a.email,
            name : a.name,
            followers : followers,
            location : a.location,
            organizations : organizations,     
            // publicrepos : public_repos 
        }])
    }  
    return(
        <div> 
             {
                detailes.map(p => (
                    <li>{console.log(detailes[0])}
                        <img src={detailes[0].avatar}></img>
                        <p>Name: {detailes[0].name}</p>
                        <p>Login: {detailes[0].login}</p>
                        <p>Bio: {detailes[0].bio}</p>
                        <a align='left' href={detailes[0].blog} >Blog: {detailes[0].blog}</a>
                        <p>Company: {detailes[0].company} </p>
                        <p>Email: {detailes[0].email}</p>
                        <p>Repostories 
                                {/* <ul>
                                     {detailes[0].public_repos.map(r => (
                                        <li>

                                        </li>
                                    ))} 
                                </ul> */}
                        </p>
                        <div style={{'height':'250px',
                                      'overflow' : 'scroll'  
                                        }}>Followers:
                             <ul>
                                    {detailes[0].followers.map(f => (
                                        <li>
                                            {f.login}
                                        </li>
                                    ))}  
                                </ul>
                        </div>

                    </li>
                  ))
              }
             
            
        </div>
    )
}
