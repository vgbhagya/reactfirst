import React from "react";
import Button1 from "./Button1";

const clickHandler=(e)=>{
    e.target.innerHTML="Hai!";
    console.log("Hai!");
}
const Component1=()=>{
    return(
        <Button1 buttonid="Button 1" handler={clickHandler}/>
    )
}
export default Component1;