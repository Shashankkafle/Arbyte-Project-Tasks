import FeedbackItem from "./FeedbackItem";
import PropTypes from  'prop-types'
function FeedbackList({feedback}) {
  if(!feedback||feedback.length==0){
    return<p>No Feedback Available</p>
  }
  return (
    <div className='feedback-list'>
      {feedback[0].map((item)=>(
        <FeedbackItem key={item.id} item={item}/>
      ))}     
    </div>    
    );
}
FeedbackList.propTypes={
  feedback : PropTypes.array
}
export default FeedbackList;
