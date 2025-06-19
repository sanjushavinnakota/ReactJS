import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch, FiMoon } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi2";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { BsBookmarks } from "react-icons/bs";
import { CiWallet, CiBellOn } from "react-icons/ci";
import { PiQuestionMarkBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { MdUpgrade } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
const LetterAvatar = ({ Username, size, backgroundColor }) => {
  const initial = Username?.charAt(0)?.toUpperCase() || '?';

  return (
    <div
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: '50%',
        color: 'white',
        fontWeight: 'bold',
        fontSize: size * 0.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        userSelect: 'none'
      }}
    >
      {initial}
    </div>
  );
};
const Navbar = () => {
  const Username = "Sardor";
  const [showMenu, setShowMenu] = useState(false);
  const [showMenu1, setShowMenu1] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleButtonToggle = () => {
    setShowMenu(prev => !prev);
  };

  const handleButtonToggle1 = () => {
    setShowMenu1(prev => !prev);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(prev => (prev === index ? null : index));
  };
  const dropdownData = [
    { label: "Prabhupada’s Life", options: [
      { label: "Who is Srila Prabhupada", path: "/who" },
      { label: "Biography", path: "/Biography" },
      { label: "Disappearance Lila", path: "DisappearMain" },
    ],
  },
  {
    label: "Legacy and Impact",
    options: [
      { label: "Achievements", path: "/Poetryfor" },
      { label: "108 Temples", path: "/Temples" },
      { label: "Eulogies By Eminent", path: "/Eulogies" },
      { label: "Prophecies Fulfilled", path: "/Prophecies" },
      { label: "Poetry for Prabhupada", path: "/Poetryfor" },
      { label: "Quick facts", path: "/quickfacts" },
    ],
  },
  {
    label: "Teachings and Literature",
    options: [
      { label: "Prabhupada Analogies", path: "/PrabhupadaAnalogies" },
      { label: "Srila Prabhupada Stories", path: "/prabhupadastories" },
      { label: "Poetry by Prabhupada", path: "/poetryby" },
      { label: "Srila Prabhupada Letters", path: "/Poetryby1" },
      { label: "Quotes", path: "/Quotes" },
    ],
  },
  {
    label: "Memories and Recollections",
    options: [
      { label: "Memories and Recollections", path: "/Memories" },
    ],
  },
  {
    label: "Explore Archives",
    options: [
      { label: "Rare Pictures", path: "/Rarepictures" },
      { label: "Photo Pastimes", path: "/photopasttime" },
      { label: "Srila Prabhupada Artifacts", path: "/Rarepicturesmain12" },
      { label: "Daily Newsletter Archive", path: "/Searchbar" },
      { label: "News Articles", path: "/Eulogies1" },
      { label: "360 view - Lila Sthali", path: "/DisappearMain" },
    ],
  },
];
  return (
    <div className="navbar">
      <div className="navbar-left">

        <GiHamburgerMenu onClick={handleButtonToggle} />

        {showMenu && (
          <div className="dropdown-content-0">
            <div className='profile'>
              <div style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(242, 199, 186, 1)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <HiOutlineUser color="none" size={30} />
              </div>

              <div className='profle-text'>
                <h6>Log in/Sign up</h6>
                <p style={{ fontSize: "1.1rem", color: "white" }}>User</p>
              </div>

            </div>
            <Link to="#"><HiOutlineSquares2X2 />Profile</Link>
            <Link to="#"><BsBookmarks />Bookmarks</Link>
            <Link to="#"><CiWallet />History</Link>
            <Link to="#"><CiBellOn />Learning Zone</Link>
            <Link to="#"><HiOutlineSquares2X2 />Share with us</Link>
            <div>

              <Link to="#"><CiWallet />FAQ’s</Link>
              <Link to="#"><CiBellOn />Help Centre</Link>
              <Link to="#"><HiOutlineSquares2X2 />Donate</Link>
            </div>
            <div className='signin'>

              <p style={{ color: "white", fontSize: "1.2rem", textAlign: "center" }}>Let's start!</p>
              <p>Creating or adding new tasks couldn't be easier</p>
              <button className='signin-button'>Sign in/Login</button>
            </div>
          </div>

        )}
        <h6>SRILA PRABHUPADA LILA</h6>


      </div>

      <div className="navbar-center">
        {dropdownData.map((item, index) => (
          <div key={index} className="dropdown">
            <p onClick={() => item.options ? toggleDropdown(index) : null}>
              {item.label} {<IoIosArrowDown className="arrow-icon" />}
            </p>

            {activeDropdown === index && (
              <div className="dropdown-content">
                {item.options?.map((option, i) => (
  <Link key={i} to={option.path}>{option.label}</Link>
))}

              </div>
            )}
          </div>
        ))}
      </div>

      <div className="navbar-right">
        <FiSearch className="icon" />
        <FaUserCircle className="icon" onClick={handleButtonToggle1} />
        {showMenu1 && (
          <div className="dropdown-content-1">
            <div className='profile1'>
              
            <LetterAvatar Username={Username}size={55} backgroundColor="#F2C7BA" />
            <div>
            <h5>{Username}</h5>
              <p style={{fontSize:"14px"}}>sardor@mail.com</p>
            </div>
            </div>

            <Link to="#"><LuSettings2 />Profile Settings</Link>
            <Link to="#"><PiQuestionMarkBold />Help Center</Link>
            <Link to="#"><FiMoon />Adjustments</Link>
            <Link to="#"><CiBellOn />Learning Zone</Link>
            <Link to="#"><MdUpgrade />Privacy policy</Link>
            <Link to="#"><BiLogOut /> Sign Out</Link>
          </div>


        )}
      </div>
    </div>


  );
};

export default Navbar;
