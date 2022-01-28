import PropTypes from 'prop-types';
import  {Link} from  'react-router-dom'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <>
      <header  style={headerStyles} >
        <div className='container'>
          <Link to='/'>
            <h1>{text}</h1>
            </Link>    
          </div>        
      </header>
    </>
  )      
}
Header.defaultProps={
  text :'Feedback App'
}
Header.prototypes={
  text : PropTypes.string
}

export default Header;


