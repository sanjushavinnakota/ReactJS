import React from 'react'
import './MemoriesFrame2.css'
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const MemoriesFrame2 = () => {
  return (
    <div className='memory'>
      <div className='memory-combine'>
      <h1>PRABHUPADA'S WORDS SHARED BY DEVOTEES </h1>
      <div className='memory-category'>
        <h5>Category:</h5>
     <button>Topic</button>
     <button>Location</button>
     <button> Devotees</button>
     <button>Qualities </button>
     </div>
     </div>
<div className="memory-row">
  
  <div className="memory-column" >
  <img src="./img/q1.png" />
    <h2>Anarthas</h2>
  
    <p>Series of Unwanted Things</p>
    
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
   
     
  </div>
  <div className="memory-column" >
  <img src="./img/q1.png" />
    <h2>Anger</h2>
    <p>If You Can`t Control Your Anger, You`ll be the Loser</p>
     <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
  
    
  </div>
<div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Anxiety/Stress</h2>
    <p>It is for Krishna, so it is all right</p>
   
    <Link to="/Anxity"> <button>Rajendranandana Dasa</button></Link>
     <button>Krishna's service</button>
     
    
  </div>
  <div className="memory-column" >
  <img src="./img/q1.png" />
    <h2>Association</h2>
    <p>A secluded place is also not secure unless </p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
  
    
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Association with devotees</h2>
    <p>Living outside the association of devotees is dangerous </p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
    
     
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Astronomy</h2>
    <p>The Science of Light</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
    
    
  </div>
  <div className="memory-column" >
  <img src="./img/q1.png" />
    <h2>Atheist</h2>
    <p>God will come as death; Then you will believe</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
    
    
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Attachment</h2>
    <p>The root of all grief is attachment</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
   
    
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Attitude</h2>
    <p>It is everything</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
  
     
  </div>
  <div className="memory-column" >
  <img src="./img/q1.png" />
    <h2>Austerity/Tapasya</h2>
    <p>There is no austerity equal to a balanced mind</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
    
    
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Bhaktivedanta Book Trust (BBT)</h2>
    <p>It is my Heart and Soul.</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
    
     
  </div>
  <div className="memory-column">
  <img src="./img/q1.png" />
    <h2>Back to Godhead magazine</h2>
    <p>It will always remain the backbone of the society</p>
    <button>Rajendranandana Dasa</button>
     <button>Krishna's service</button>
     
  
  </div>
  
</div>
</div>
    )
  }


export default MemoriesFrame2;
