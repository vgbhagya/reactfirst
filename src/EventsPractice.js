import React from "react";
var inputValue;

const clickHandler=(e)=>{
// e.target.innerHTML="clicked";
// inputValue=e.target.value; 
console.log(e.target.value);
console.log('value:${inputValue}');
 //var x = document.getElementById("myText").value;
// console.log(x);
// console.log('helloooo')
}

const EventsPratice=()=>{
return(
<>
{/* <button onclick={clickHandler}>Click</button>
<button onclick={(e) => clickHandler(e)}>click me</button> */} 
<input type='text' id='myText' value={inputValue}/> 
<input type='button' onClick={(e) => clickHandler(e)} value={inputValue}/>
</>
)
} 
export default EventsPratice;