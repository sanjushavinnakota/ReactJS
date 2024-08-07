import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";


function Navbar() {
<div className="navbar">
<div className="hamburger">
< GiHamburgerMenu/>
</div>

<div className="logo">
<h5>SRILA PRABHUPADA LILA </h5>
</div>
<div className="navlinks">
<a href="#">Prabhupada’s Life <IoIosArrowDown/></a>
<a href="#">Legacy and Impact <IoIosArrowDown/></a>
<a href="#">Teachings and Literature <IoIosArrowDown/></a>
<a href="#">Memories and Recollections<IoIosArrowDown/></a>
<a href="#">Explore Archives<IoIosArrowDown/></a>

</div>

<div className="icons">
<CiSearch />
<CgProfile />
</div>

  </div>
     
     }

export default Navbar;