
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import Explore from  './pages/Explore'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from  './pages/ForgotPassword'
import PrivateRoute from './components/PrivateRoute';
import Offers from  './pages/Offers'
import Category from  './pages/Category'
import Profile from  './pages/Profile'
import SignIn from  './pages/SignIn'
import SignUp from  './pages/SignUp'
import NavBar from './components/NavBar'
import CreateListing from './pages/CreateListing';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/'  element={<Explore/>}/>
          <Route path='/forgot-password'  element={<ForgotPassword/>}/>
          <Route path='/offers'  element={<Offers/>}/>
          <Route path='/category/:categoryName'  element={<Category/>}/>
          <Route path='/profile'  element={<PrivateRoute/>}>
            <Route path='/profile'  element={<Profile/>}/>
          </Route>  
          <Route path='/sign-in'  element={<SignIn/>}/>
          <Route path='/sign-up'  element={<SignUp/>}/>
          <Route path='/create-listing'  element={<CreateListing/>}/>
        </Routes>
        <NavBar/>
      </Router>
      <ToastContainer/>
    </>
  );
}

export default App;