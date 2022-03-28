import React from 'react';
import{ NavLink,Link
}from "react-router-dom";
const Nav = () => {
  const activeStyle={
    'color': 'red',
    'fontSize':'32px'
  }
    return(
        <nav>
        <Link to="/">Home</Link>
        <NavLink style={({ isActive})=>
        isActive ? activeStyle : undefined} to="/aboutus">about</NavLink>
        <NavLink style={({ isActive})=>
        isActive ? activeStyle : undefined} to="/contactus">contact</NavLink>
        <NavLink style={({ isActive})=>
        isActive ? activeStyle : undefined} to="/categories">categories</NavLink>
      
      </nav>
    )
}
export default Nav;