import React from 'react';
import './Mainframe1.css';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";


function Mainframe1() {

    return (
        <>
      <div className='Main-body'>
<div className="Main-heading">
    <p>Explore the Lila of</p>

    </div> 
    
<div className="Main-heading1">
    <p><i>Srila Prabhupada</i></p>
    
</div>
<div className="Main-para">
    <p>The International Society for Krishna Consciousness (ISKCON), founded by Srila Prabhupada, is a movement that has given thousands of its adherents a spiritual perspective on life.</p>

    </div> 


<div className='Main-combo'>
    <div className="main-button">
  <button>READ MORE ABOUT SRILA PRABHUPADA</button>

  

    <div className="Main-icons">
   <TiSocialYoutube  />
    <SlSocialInstagram />
    <TiSocialTwitter/>
    <TiSocialPinterestCircular />
    <TiSocialFacebookCircular />
</div>

    </div> 
    </div> 
  
<div className="Main-image">
    
<img src="./img/home.png"></img>
    </div> 
</div>
</>
    )
  };


export default Mainframe1;
