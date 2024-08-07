import React, { useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { RxHamburgerMenu } from "react-icons/rx";
import './Navbar.css';

function Navbar() {
    const[showMediaIcons, setShowMediaIcons]=useState(false);
  return (
<nav className="navMain" >
<div className="hamburger-desktop"><RxHamburgerMenu class="hamburger-desktop1" />
<div className="logo">
        <h3>SRILA PRABHUPADA</h3>
    </div>
</div>

    
    <div
          className={
            showMediaIcons ? "mainMinu mobile-menu-link" : "mainMenu"
          }>
        <ul >
            <li>
                <a href="/"> Prabhupada's life <MdOutlineKeyboardArrowDown />
</a>
            </li>
            <li>
                <a href="/"> Legacy and Impact <MdOutlineKeyboardArrowDown />
</a>
            </li>
            <li>
                <a href="/"> Teachings and Literature <MdOutlineKeyboardArrowDown />
</a>
            </li>
            <li>
                <a href="/"> Memories and Recollections <MdOutlineKeyboardArrowDown />
</a>
            </li>
            <li>
                <a href="/">Explore Archives<MdOutlineKeyboardArrowDown />
</a>
            </li>
        </ul>
        </div>
        <div className='Icons'>
        <div className="Search-desktop"><FiSearch className="Search-desktop1" /></div>
        <div className="CgProfile-desktop"><CgProfile  className="CgProfile-desktop1" /></div>
       

<div className="hamburger"> 
<a href="#" onClick={() =>setShowMediaIcons(!showMediaIcons)}><RxHamburgerMenu  style={{color:"white",fontSize:"20px"}}/></a>
</div>



            </div>
      
       

</nav>







  )
}
export default Navbar;
