import React from 'react'
import './AnalogyFrame2.css'
import Carddetails from '../../components/Cards/card'
import cards from '../../api/cards';

const AnalogyFrame2 = () => {
  return (

    <>
      <div className='analogy'>
        {cards.Analogy.map((cards) => (
          <Carddetails
            image={cards.image}
            title={cards.title}
            description={cards.description}
            showIcons={false}
          />
        ))}

      </div>
    </>

  )
}


export default AnalogyFrame2;
