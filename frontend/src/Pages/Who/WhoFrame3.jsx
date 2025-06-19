import React from 'react'
import Carddetails from '../../components/Cards/card'
import cards from '../../api/cards';
import './WhoFrame3.css'   

const WhoFrame3 = () => {
    const Continue = "Continue Reading"
  return (
    <div className='recent'>
    <div className='added'>
    <h3  style={{lineHeight:"3rem"}}>Recently Added</h3>
    <button>See All</button>
    </div>
    <div className='world'>
    <img src="/img/pp6.png" alt="world-image" />
    <div className='world-para'>
    <h3>Lorem Ipsum Neque porro qui dolorem </h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
    <button >Continue Reading</button>
    </div>
  
  </div>
  <div className='who'>
  {cards.Who.map((cards) =>(
<Carddetails 
image={cards.image}
title={cards.title}
description={cards.description}
showIcons={false}
button={Continue}

/>
 ))}
  </div>

  </div>
  
  )
}

export default WhoFrame3;
