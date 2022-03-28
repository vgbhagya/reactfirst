import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Search from "./Search";
import Link from "./Links";
import Heading from "./Heading";

const callback=(data)=>{

  console.log(data);
}
const Header = () => {
return(
  <>
  <Heading/>
    <div className="App-header">
      <center>
      <Logo />
     <Search  cb={callback}/>
     <Button />
      <Link />
      </center>
      </div>
      </>
  );
  };

 
export default Header;

