import { SearchBar } from "./SearchBar";
import { UserList } from "./UserList";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./Profile";
function App() {
  // const [data,setData]=useState('')
  const [query,setQuery]=useState('')
  const [profiles,setProfiles]=useState([])
  const [user,setUser]=useState('')
  return (
    <div className="App">
      <Router>
        <div>
          <form onSubmit={ (e)=>{ e.preventDefault()
                                setQuery(document.getElementById('Query').value)}}>
              <input required autoFocus placeholder='Username'  id='Query'></input>
              <button>Search</button>
            </form> 
            <a href="http://localhost:3000/">Home</a>
          </div>     
           {/* <Switch> */}
              <Route  exact path='/'> 
                <UserList query={query} profiles={profiles} setProfiles={setProfiles} setUser={setUser}></UserList> 
                </Route>
                {/* <Profile user={user}></Profile>   */}
              <Route path='/profile' component={Profile}>
                <Profile user={user}></Profile>
              </Route> 
          {/* </Switch>   */}
      </Router>     
    </div>
  );
}

export default App;
