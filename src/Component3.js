import React from "react";
import Button1 from "./Button1";

const clickHandler=(e)=>{
    e.target.innerHTML="Bye!";
    console.log("Bye!");
}
const Component3=()=>{
    return(
        <Button1 buttonid="Button 3" handler={clickHandler}/>
    )
}
export default Component3;