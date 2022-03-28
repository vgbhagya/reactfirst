import React from "react";
import Heading from "./Heading";

    const MockData=[
        {
            'name':"Pushpa",
            'price':"MRP 1999",
            'image':"https://m.media-amazon.com/images/I/91mZVmYivFL._AC_UL320_.jpg"
        },
        {
            'name':"Ravana Lanka",
            'price':"MRP 1999",
            'image':"https://m.media-amazon.com/images/I/71hpYMkFKFL._AC_UL320_.jpg"
        },
        {
            'name':"Gehraiyaan",
            'price':"MRP 1999",
            'image':"https://m.media-amazon.com/images/I/71sr1Y7nYZL._AC_UL320_.jpg"
        },
        
    ];
    const textStyle={
        display:'flex',
        textAlign:'center'
    }
    const Mobiles=()=>{
        const createList=()=>{
            return MockData.map((value,index)=>{
                return <div key={index}><img src={value.image} alt={value.name} height="400px" width="300px"/><h2>{value.name}</h2></div>

            })

        }
        return(
            <>
            <Heading heading="New Arrivals"/>
            <ul style={textStyle}>
                {createList(MockData)}
                </ul>
                </>
        )
    }
export default Mobiles;