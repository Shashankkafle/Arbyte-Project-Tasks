
import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'

function Contact() {
  const[message,setMessage]=useState('')
  const[landlord,setLandlord]=useState(null)
  const params=useParams() 
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(()=>{
      const getLandlord= async()=>{
          const docRef=doc(db,'users',params.landlordId)
          const docSnap=await getDoc(docRef)
        if(docSnap.exists()){
            setLandlord(docSnap.data())
        }else{
            toast.error('Cold not get landlrd')
        }

      }
    getLandlord()  
  }) 
  const onChange=(e)=>{
        setMessage(e.target.value)
  }
  return( 
        <div className='pageContainer'>
            <header>
                <p className='pageHeader'>Contact Landlord</p>
            </header>
            {landlord!==null&&(
                <main>
                    <div className='contactLandlord'>
                    <p className='landlordName'>Contact {landlord?.name}</p> 
                    </div>
                    <form>
                        <textarea name='message'  id='message' className='textarea' value={message} onChange={onChange}>
                        </textarea>
                        <a
                        href={`mailto:${landlord.email}?Subject=${searchParams.get(
                            'listingName'
                        )}&body=${message}`}
                        >
                            <button type='button' className='primaryButton'>
                                Send Message
                            </button>
                        </a>
                    </form>    
                </main>    

            )}
                        
        </div>
    );
}

export default Contact;
