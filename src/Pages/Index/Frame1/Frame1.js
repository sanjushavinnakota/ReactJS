import React from 'react';
import './Frame1.css';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { TiSocialFacebookCircular } from "react-icons/ti";


function Frame1() {

    return (
      <div className='body'>
<div className="heading">
    <p>Explore the Lila of</p>

    </div> 
    
<div className="heading1">
    <p><i>Srila Prabhupada</i></p>
    
</div>
<div className="para">
    <p>The International Society for Krishna Consciousness (ISKCON), founded by Srila Prabhupada, is a movement that has given thousands of its adherents a spiritual perspective on life.</p>

    </div> 


<div className='combo'>
    <div className="button">
  <button>Read More About Srila Prabhupada</button>

  

    <div className="icons">
   < TiSocialYoutube  />
    <SlSocialInstagram />
    <TiSocialTwitter/>
    <TiSocialPinterestCircular />
    <TiSocialFacebookCircular />
</div>

    </div> 
    </div> 
  
<div className="image">
    
<img src="./img/home.png"></img>
    </div> 
</div>

 
    )
  };


export default Frame1;
