import {useState, useEffect, useRef } from 'react';
import {getAuth,updateProfile} from 'firebase/auth'
import { db } from '../firebase.config';
import {useNavigate,Link}  from 'react-router-dom'
import {updateDoc,doc} from 'firebase/firestore'
import { toast} from 'react-toastify';
function Profile() {
    const auth= getAuth()
    console.log(auth)
    const[changeDetailes,setChangeDetailes]  = useState(false)
    const[formData,setFormData]=useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    const{name,email} = formData
    const navigate=useNavigate()
   const onLogout = ()=>{
       auth.signOut()
       console.log(auth)
       navigate('/')
   } 
   const onSubmit=async()=>{
       try {
           if(auth.currentUser.displayName !==name){
               //update displaName in fb
                await updateProfile(auth.currentUser,{
                    displayName:  name,
                })
            //update in Firestore
            const userRef = doc(db, 'users', auth.currentUser.uid)
            await updateDoc(userRef, {
              name,
            })
           }
       } catch (error) {
           console.log(error)
           toast.error('Couldnot Update Profile Details')
       }
   }
   const onChange=(e)=>{
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id] : e.target.value
        }))
   }
    return(
       <div className='profile'>
           <header className="profileHeader">
               <p className="pageHeader">My Profile</p>
               <button type='button' className="logOut" onClick={onLogout}>
                   Logout
               </button>
           </header>
           <main>
            <div className='prfileDetailesHeader'>  
                <p className="profilesDetailesText">Personal Details</p>    
                <p className="changePersonalDetails" onClick={()=>{
                    changeDetailes&&onSubmit()
                    setChangeDetailes((prevState)=>!prevState)
                }}>
                    {changeDetailes ? 'Done': 'Change'}
                </p>
            </div> 
            <div className="profileCard">
                <form>
                    <input type="text" id='name' className={!changeDetailes ? 'profleName':'profleNameActive'} 
                    disabled={!changeDetailes}
                    value={name}
                    onChange={onChange}/>
                    <input type="text" id='email' className={!changeDetailes ? 'profleEmail':'profleEmailActive'} 
                    disabled={!changeDetailes}
                    value={email}
                    onChange={onChange}/>
                </form>
            </div>
           </main>
       </div>
      );
  }
  
  export default Profile;