import React ,{useState,useEffect} from "react";
const Search=(props)=>{
  const [label,setLabel]=useState('this is Hools');
  console.log(props)
  const [data,setData]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/tools/1')
    .then(Response=>Response.json())
    .them(json=>setData(json))
  },[])
  return(
    <>
    <h2>{JSON.stringify(data)}</h2>
    <h1>{label}</h1>
    <input type="search"/>
    <button onClick={()=>props.cb("CallBack...")}>CallBack Click</button>
    <button onClick={()=>setLabel('${label} hey...')}>Hooks</button>
    </>
  )
}
export default Search;
