import PropTypes from  'prop-types'
import React from 'react';



const Card = ({children, reverse}) => {
  return( 
      
          <div className={reverse ? 'card reverse':'card'}>
            {children}
          </div>
         
    );
};
Card.defaultProps={
  reverse :false,
}

Card.propTypes={
  reverse : PropTypes.bool,
  children : PropTypes.node.isRequired,
}
export default Card;
