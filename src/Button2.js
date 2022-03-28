import React from 'react';

const Button2 = ({buttonvalue,handler}) => {
  return(
    <button type="submit" onClick={(e)=>handler(e)}>{buttonvalue} </button>
  );
}
export default Button2;