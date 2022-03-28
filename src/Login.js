import React from 'react';
const textStyle={
    textcolor:'blue',
}
const Login=()=>{
    return(
       <> 
        <h2>Invalid Login</h2>
        <p style={textStyle}><input type="button" value="Login"/></p>
        </>
    )
}
export default Login;