import React from 'react'
import './Navbar.css'
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (

  
        <div className="Navbar">

          <div className=" menu">
          <GiHamburgerMenu />

          </div>
          <div className="logo">
          <h5>SRILA PRABHUPADA LILA</h5>
          </div>
          <div className="links">
          
          <a href='#'>Prabhupada’s Life <IoIosArrowDown /></a>
            <a href='#'>Legacy and Impact <IoIosArrowDown /></a>
            <a href='#'>Teachings and Literature <IoIosArrowDown /></a>
            <a href='#'>Memories and Recollections <IoIosArrowDown /></a>
            <a href='#'>Explore Archives <IoIosArrowDown /></a>
          </div>
          <div className="icons">
              
          <IoSearch />
          <CgProfile />


          </div>
<div > 

    </div>
    
      
   
    </div>
    
  )
}
export default Navbar;