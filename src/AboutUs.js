import React from "react";
import { Link,Outlet } from "react-router-dom";
const AboutUs =() =>{
    return (
        <>
        <nav>
            <Link to ="size">Size</Link>
            <Link to ="color">Color</Link>
        </nav>
        </>
    )
}
export default AboutUs;