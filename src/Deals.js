import React from "react";
import Heading from './Heading';

const MockData=[
    {
        'name':'WebCams',
        'price':'MRP 20000',
        'offer':'10000',
        'image':"https://rukminim1.flixcart.com/image/612/612/kgzg8sw0/webcam/5/h/y/hp-webcam-w100-original-imafx2zjcgygm94x.jpeg?q=70",
        'alt':'WebCam'
    },
    {
        'name':'Styilesh Red color shirt',
        'price':'MRP 800',
        'offer':'500',
        'image':"https://rukminim1.flixcart.com/image/460/552/kz4gh3k0/shirt/w/0/u/m-hoodied-shirt-magenta-nakash-original-imagb7pwvbdu4dfz.jpeg?q=50",
        'alt':'shirt'
    },
    {
        'name':'Jewelry Sets For Women Wedding party Earrings & Necklace',
        'price':'MRP 2000',
        'offer':'1000',
        'image':"https://rukminim1.flixcart.com/image/460/552/k62i5jk0/jewellery-set/z/b/j/skr58123-sukkhi-original-imafzhbug9zwjat6.jpeg?q=50",
        'alt':'Jewelry set'
    },
];
const handleMouseOver=(e)=>{

    e.target.style.height='500px';
    
    // e.target.style.width='400px';
    
    }
    
    const handleMouseLeave = (e) => { 
        e.target.style. height='400px';
    
    }
    
    const textStyle={
    
    display: 'flex', 
    textAlign: 'center'
    
    }
    
    const Deals =()=>{
        const createList=()=>{
            return MockData.map((value, index)=>{
                return <div key={index} style={textStyle}><img src={value.image}
                     onMouseOver={handleMouseOver} 
                     onMouseLeave={handleMouseLeave} 
                    alt={value.alt} 
                    height="400px" 
                    width="300px"/><h3>{value.name}</h3>
     <strike>{value.price}/-</strike><h3>Just{value.offer}/-</h3></div>
    })
}
return(
    <>
    <Heading heding="Deals of the Day"/>
    <ul style={textStyle}>
    {createList(MockData)}
    </ul>
    </>
)}
export default Deals;