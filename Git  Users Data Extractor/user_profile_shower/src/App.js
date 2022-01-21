import { SearchBar } from "./SearchBar";
import { UserList } from "./UserList";
import { useState } from "react";
function App() {
  const [data,setData]=useState('')
  async function findUsers(e){
    var a= await fetch("https://api.github.com/users/"+e)
    a=await a.json()
    setData(a)


    
  }
  return (
    <div className="App">
      {/* <input required type={'text'} id="input"></input>
      <button onClick={(e)=>{findUsers(document.getElementById('input').value)}}></button>
      {console.log(data)} */}
      <SearchBar></SearchBar>
      <UserList data></UserList>
    </div>
  );
}

export default App;
