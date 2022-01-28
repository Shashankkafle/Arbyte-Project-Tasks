import {useContext,useEffect} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackForm = () => {
  const {addFeedback,feedbackEdit,updateFeedback} = useContext(FeedbackContext)  
  const[text,setText] =useState('')  
  const[rating,setRating] =useState(10)
  const[btnDisabled,setBtnDisabled] = useState(true)
  const[message,setMessage] = useState('')
  useEffect(()=>{
    if(feedbackEdit.edit===true){
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
        console.log(rating)
    }
  },[feedbackEdit])
  

  const hanleTextChange =(e)=>{
      if(text==''){
      setBtnDisabled(true)
      setMessage(null)
      }
      else if(text!=='' && text.trim().length<=10){
          
      setBtnDisabled(true)
      setMessage('Review mustt at least 10 chaacters')
      } 
      else{
          setMessage(null)
          setBtnDisabled(false)
      }

      setText(e.target.value)
  }
  const handleSubmit=(e)=>{
      e.preventDefault()
      if(text.trim().length>10){
          const newFeedback = {
            text,
            rating
          }
          if(feedbackEdit.edit==true){
            updateFeedback(feedbackEdit.item.id,newFeedback)
          }
          else{
            addFeedback(newFeedback) 
          }
           
          setText('')
      }
    

  }
  return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>
                    How would rate our services?
                </h2>
                <RatingSelect select={(rating) =>setRating(rating)}/>
                <div className='input-group'>
                    <input onChange={hanleTextChange} type='text' value={text} placeholder='Write a review.'/>
                    <Button type='submit' isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>);
};

export default FeedbackForm;
