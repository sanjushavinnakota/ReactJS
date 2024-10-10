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

  <div className='grid navbar-grid'>


    <div className='logo'>
      <div className="hamburger">
    <GiHamburgerMenu style={{height:"35px"}}/>
    <div className='user'>
    <LuUserCircle />

    </div>

    </div>
    <Link to="/main" className='Srila-Logo'>Srila Prabhupada Lila</Link>
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
<Link to="/">Rare Pictures</Link>
  <Link to="/photopasttime">Photo Pastimes</Link>
  <Link to="/">Srila Prabhupada Artifacts</Link>
  <Link to="/">Daily Newsletter Archive</Link>
  <Link to="/">News Articles</Link>
  <Link to="/">360 view - Lila Sthali</Link>
 </div></li>


    <div className="buttons">
<div className="search-button">
<IoSearch />
</div>
<div className='profile-button'>
<IoPersonOutline />
</div>
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





















import React from 'react'
import './Navbar.css'

import { GiHamburgerMenu } from "react-icons/gi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
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
<>
<div className="menu">
      <label for="toggle-responsive" className="toggle-menu">Menu</label>
      <input type="checkbox" id="toggle-responsive"/>
      <ul className="nav level-one">
        <li><a href="#">Item 1</a></li>
        <li className="parent"><a href="#">Item 2 </a>
          <label for="toggle-level-2-01" className="toggle">o</label>
         
                </li>
              </ul>
          <ul>  
   
        <li className="parent"><a href="#">Item 3</a>
          <label for="toggle-level-2-02" className="toggle">o</label>
          <input type="checkbox" id="toggle-level-2-02"/>
         
              <label for="toggle-level-3-02" className="toggle">o</label>
              <input type="checkbox" id="toggle-level-3-02"/>
             
            </li>
           
          </ul>
       
        <li><a href="#">Item 4</a></li>
        <li><a href="#">Item 5</a></li>
        <li><a href="#">Item 6</a></li>

      
    </div>



    </>
  )
}
export default Navbar;\





















import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const router = createBrowserRouter([
  {
    path: "App/",
    element: <App />,
  },
  
]);