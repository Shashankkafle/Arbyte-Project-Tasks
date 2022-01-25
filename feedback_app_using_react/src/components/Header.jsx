import PropTypes from 'prop-types';

function Header({text}) {
  return (
    <>
      <header className='container' >
        <h1>{text}</h1>        
      </header>
    </>
  )      
}
Header.defaultProps={
  text :'Fedback App'
}
Header.prototypes={
  text : PropTypes.string
}

export default Header;


