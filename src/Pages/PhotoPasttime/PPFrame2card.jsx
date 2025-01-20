import React from 'react'
import './PPFrame2.css'
import cards from '../../api/cards';
const PPFrame2card = () => {
  return (
    <>
      {cards.Photopasttime.map((curElem, index) => {
        return (


          <div class="cards-row2" key={index}>
            <div class="cards-column2" >

            <img  src={curElem.img} alt="image-loading" />
            <h5>{curElem.title}</h5>
            <p>{curElem.content}</p>
            <button>ReadMore</button>
            </div>

          </div>

        )
      
  })}
  </>
  );
  
}


export default PPFrame2card;
