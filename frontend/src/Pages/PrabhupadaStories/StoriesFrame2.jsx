import React from 'react'
import cards from '../../api/cards';
import Carddetails from "../../components/Cards/card";
import "./StoriesFrame2.css"
const StoriesFrame2 = () => {
  const ReadMore = "Read More";
  return (
    <>
      <div className="stories">
      {cards.Stories.map((card,index) => (
       
          <Carddetails
            key={index}
            cardKey={`card-${index}`}
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
export default StoriesFrame2;
