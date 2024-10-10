import React from 'react'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import {useState} from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { LuUserCircle } from "react-icons/lu";

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);
  const handleButtonToggle=()=>{
setShowMenu(!showMenu);
  };
  return (
<navbar>

<div className='container1'>
<div className='logo'>
   
   <Link to="/main" className='Srila-Logo'>Srila Prabhupada Lila</Link>
   <div className='user'>
   <LuUserCircle />

   </div>

  


  

   
    <nav className={showMenu ? "menu-mobile" : "menu-web"}>
    
      <ul className='dropdown'>
     
    
        <li className="life"><a>Prabhupada’s Life <MdOutlineKeyboardArrowDown />
</a>
 <div className="content" >
  <Link to="Who/" >Who is Srila Prabhupada</Link>
  <Link to="Biography/"  >Biography</Link>
  <Link to="/DisappearMain" >Disappearance Lila</Link>
 </div>
</li>
        <li className="legacy"><a>Legacy and Impact<MdOutlineKeyboardArrowDown />
</a> <div className="content1">
<Link to="/">Achievemnts</Link>
  <Link to="Temples/">108 Temples</Link>
  <Link to="/Eulogies"> Eulogies By Eminent</Link>
  <Link to="/Prophecies">Prophecies Fulfilled by Srila Prabhupada</Link>
  <Link to="/Poetryfor">Poetry for Prabhupada</Link>
  <Link to="/quickfacts">Quick facts</Link>
 </div></li>
        <li className="teaching"><a>Teachings and Literature<MdOutlineKeyboardArrowDown />
</a> <div className="content2">
<Link to="/PrabhupadaAnalogies">Prabhupada Analogies</Link>
<Link to="/prabhupadastories">Srila Prabhupada Stories</Link>
<Link to="/Poetryby">Poetry by Prabhupada</Link>
<Link to="/">Srila Prabhupada Letters</Link>
<Link to="Quotes/">Quotes</Link>
 </div></li>
        <li className="memory">
       <Link to="/Memories" style={{color:"white"}}>Memories and Recollections<MdOutlineKeyboardArrowDown />
</Link>

          </li>
          
        <li className="explore"><a>Explore Archives<MdOutlineKeyboardArrowDown />
</a> <div className="content4">
<Link to="/Rarepictures">Rare Pictures</Link>
  <Link to="/photopasttime">Photo Pastimes</Link>
  <Link to="/">Srila Prabhupada Artifacts</Link>
  <Link to="/">Daily Newsletter Archive</Link>
  <Link to="/">News Articles</Link>
  <Link to="/">360 view - Lila Sthali</Link>
 </div></li>


    <div className="buttons">
    <Link to="/Searchbar" className="search-button" style={{color:"white"}}>
<IoSearch />
</Link>
  <Link to="/Searchbar"  className='profile-button'  style={{color:"white"}}>
<IoPersonOutline />
</Link>
</div>
      </ul>
      
    </nav>
    
    <div className="ham-menu">
      <button onClick={handleButtonToggle}>
      <GiHamburgerMenu />

    </button>
   
    </div>
  
  </div>
  </div>
</navbar>

  )
}
export default Navbar;





