import React from 'react';

const Button1 = ({buttonid,handler}) => {
  return(
    <button type="submit" onClick={(e)=>handler(e)}>{buttonid} </button>
  );
}
export default Button1;