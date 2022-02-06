import {useState, useEffect, useRef } from 'react';
import {getAuth,updateProfile} from 'firebase/auth'
import { db } from '../firebase.config';
import {useNavigate,Link}  from 'react-router-dom'
import { updateDoc,
    doc,
    collection,
    getDocs,
    query,
    where,
    orderBy,
    deleteDoc,} from 'firebase/firestore'
import { toast} from 'react-toastify';
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
import ListingItem from  '../components/ListingItem'
import Spinner from '../components/Spinner';
function Profile() {
    const auth= getAuth()
    const [listings,setListings] = useState(null)
    const [loading,setLoading] = useState(true)
    const[changeDetailes,setChangeDetailes]  = useState(false)
    const[formData,setFormData]=useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })
    useEffect(()=>{
        const fetchListings = async ()=>{
            const collecttionRef = collection(db,'listings')
            let listings = []
            const q =query(
                collecttionRef,
                where('userRef', '==', auth.currentUser.uid),
                orderBy('timestamp', 'desc')
              )
            const querySnap = await getDocs(q)  
            querySnap.forEach((doc) => {
                return listings.push({
                  id: doc.id,
                  data: doc.data(),
                })
              })
        
              setListings(listings)
              setLoading(false)
        }
        fetchListings()
    },[auth.currentUser.uid])

    const{name,email} = formData
    const navigate=useNavigate()
    const onLogout = ()=>{
       auth.signOut()
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
   const onDelete = async (listingId)=>{
       if(window.confirm('Are you sure?')){
           await deleteDoc(doc(db,'lstings',listingId))
       }
       const updatedListings = listings.filter((listing)=>listing.id !==  listingId)
       setListings(updatedListings)
       toast.success('Sccessfully deleted listing')

   }
// const onDelete = async (listingId) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       await deleteDoc(doc(db, 'listings', listingId))
//       const updatedListings = listings.filter(
//         (listing) => listing.id !== listingId
//       )
//       setListings(updatedListings)
//       toast.success('Successfully deleted listing')
//     }
//   }
   const onEdit  = async (listingId)=>{

   }
   if(loading){
       return <Spinner/>
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
            <Link to='/create-listing' className='createListing'>
                <img src={homeIcon} alt='home' />
                <p>Sell or rent your home</p>
                <img src={arrowRight} alt='arrow right' />
            </Link>
            {!loading && listings?.length > 0 && (
          <>
            <p className='listingText'>Your Listings</p>
            <ul className='listingsList'>
              {listings.map((listing) => (
                <ListingItem
                  key={listing.id}
                  listing={listing.data}
                  id={listing.id}
                  onDelete={() => onDelete(listing.id)}
                  onEdit={()=>onEdit(listing.id)}
                />
              ))}
            </ul>
          </>
        )}
           </main>
       </div>
      );
  }
  
  export default Profile;