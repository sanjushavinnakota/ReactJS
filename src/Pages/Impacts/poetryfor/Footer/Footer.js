import React from 'react';
import './Footer.css';
import { FaFacebook ,FaYoutube, FaTwitter} from "react-icons/fa";


const Footer = () => {

  return (
 
  <div className='Footer'>
    <div className='row1'>
    <p className='ParaName'>Also check Srila Prabhupada Lila App on</p>
    <div className='DownloadButton'>
<div className='GooglePlay'><a class="btn btn-google" href="#" title="Google Play">Google Play</a></div>
<div className='AppStore'><a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"alt="bn45"/></a></div>
</div>
</div>
<hr class="new1"></hr>
<div></div>
<div className="col1">
<h3>Srila Prabhupada Lila</h3>
<h6>Subscribe to our newsletter</h6>
<p>Be the first to know about the biggest stories as they break</p>
<div class="input-button"> 
<input className='input' type="email" placeholder='Email Address' />
<button className='button'>Subscribe</button>
</div>
<p className='privacy'>By clicking Subscribe, you indicate that you agree to Hypnosis Terms and Conditions and Data Use Privacy Policy</p>
<p>Follow Us:</p>
<div className="socialIcons">
    <FaFacebook />
    <FaYoutube />
    <FaTwitter />
</div>
</div>
<div className='Info'>
<div className='About' >
<h6 style={{color:"#FF8A40"}}>About us</h6>
<p>Who we are</p>
<p>Newsstand</p>
<p>My profile</p>
</div>

<div className='Archive'>
<h6 style={{color:"#FF8A40"}}>Prabhupada Archives</h6>
<p>Biography</p>
<p>Srila Prabhupada Letters</p>
<p>Photo Pastimes</p>
<p>Daily Newsletter Archive</p>
<p>News Articles</p>

</div>
<div className='Help'>

<h6 style={{color:"#FF8A40"}}>Support and Help</h6>
<p>Share With Us</p>
<p>Testimonials</p>
<p>Acknowledgements</p>
<p>Donate</p>
<p>FAQ’s</p>
<p>Ask a Question</p>
    
</div>
<div className='Policy'>

<h6 style={{color:"#FF8A40"}}>Policies and Informations</h6>
<p>Privacy policy</p>
<p>Site map</p>
<p>Terms and conditions</p>
<p>Accessibility</p>
    
</div>
</div>








  </div>
  
)
    
};

export default Footer;
