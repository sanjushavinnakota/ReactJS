import React from 'react'
import './PPFrame2.css'
import cards from '../../api/cards';
import Carddetails from '../../components/Cards/card';
import "../PrabhupadaStories/StoriesFrame2.css"
const PPFrame2 = () => {
  const ReadMore = "Read More"
  return (
    <>
    <div className='stories'>
      {cards.Photopasttime.map((card) => (
       <Carddetails 
       image={card.image}
       title={card.title}
       description={card.description}
       button={ReadMore}
       
       
       />
      
  ))}
  </div>
  </>
  );
  
}


export default PPFrame2;
