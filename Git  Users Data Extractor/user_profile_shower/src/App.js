import { SearchBar } from "./SearchBar";
import { UserList } from "./UserList";
import { useState } from "react";
function App() {
  // const [data,setData]=useState('')
  const [query,setQuery]=useState('')
  return (
    <div className="App">
       <form onSubmit={ (e)=>{ e.preventDefault()
                            setQuery(document.getElementById('Query').value)}}>
          <input required autoFocus placeholder='Username'  id='Query'></input>
          <button>Search</button>
        </form>      
        <UserList query={query}></UserList>
    </div>
  );
}

export default App;
