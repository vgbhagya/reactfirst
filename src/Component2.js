import React from "react";
import Button1 from "./Button1";

const clickHandler=(e)=>{
    e.target.innerHTML="Hello!";
    console.log("Hello!");
}
const Component2=()=>{
    return(
        <Button1 buttonid="Button 2" handler={clickHandler}/>
    )
}
export default Component2;