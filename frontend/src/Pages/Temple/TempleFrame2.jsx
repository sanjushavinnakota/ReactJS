import React from 'react'
import Carddetails from '../../components/Cards/card'
import cards from '../../api/cards';
import './TempleFrame2.css'


const TempleFrame2 = () => {
  return (
    <>
    <div className='temple'>
      {cards.temple.map((card) => (
        <Carddetails
          image={card.image}
          title={card.title}
          description={card.description}
          showIcons={false}
          buttons={[
            { text: "Read More",className:"bt1", onClick: () => alert("Read more clicked!") },
            { text: "Donate", onClick: () => alert("Donate clicked!") },
          ]}
        />
      ))}
    </div>
    </>
  )
}

export default TempleFrame2
