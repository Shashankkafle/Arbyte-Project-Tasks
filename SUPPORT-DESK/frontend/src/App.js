import {BrowserRouter as Router,Routes,Route, Link} from 'react-router-dom'
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { ToastContainer } from 'react-toastify'
function App() {
  return (
    <>

        <Router>
          <div className='container'>
            <Header/>
            <Routes>
              <Route  path='/' element={<Home/>}/>
              <Route  path='/login' element={<Login/>}/>
              <Route  path='/register' element={<Register/>}/>
            </Routes>
          </div>
        </Router>
        {/* <ToastContainer/>   */}
    </>
  );
}

export default App;
