import React from "react";
import Heading from "./Heading";
import { Link,Outlet } from "react-router-dom";
const MockData=[
  {
    'name':"Mobiles",
    'image':"https://rukminim1.flixcart.com/image/150/150/k6zda4w0/mobile/s/n/9/tecno-camon-15-pro-cd8-original-imafpbhc7p25zda7.jpeg?q=70"
  },
  {
    'name':"Grocery",
    'image':"https://rukminim1.flixcart.com/image/612/612/kr83ukw0/nut-dry-fruit/g/u/x/325-premium-international-daily-super-health-mix-seeds-pouch-original-imag5fx8cp9wyb6a.jpeg?q=70"
  },
  {
    'name':"Fashion",
    'image':"https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100"
  },
  {
    'name':"Appliances",
    'image':"https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100"
  },
  {
    'name':"Electronics",
    'image':"https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100"
  },
];
const textStyle={ 
  display: 'flex', 
  width: '10px',
  textAlign: 'center',
 }

const Categories =()=>{ 
  const createList=()=>{

return MockData.map((value, index)=>{ 
  return < div key={index}><img src={value.image} alt={value.name} height="80px"/><h4>{value.name}</h4></div>

})

}

return (
  <>
    <Heading heading="Categories"/> 
      <ul style={textStyle}> 
      {createList(MockData)}
      </ul>
  </>
)};
export default Categories;