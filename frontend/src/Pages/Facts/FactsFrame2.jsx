import React from 'react';
import quotesData from '../../api/quotesData';
import Carddetails from '../../components/Cards/card';
import '../Quotes/QuotesFrame2.css'
const FactsFrame2 = () => {

  return (
    <>
       <div className='Quotes-Quickfacts'>
                {quotesData.QuickFacts.map((card,index) => (
                    <Carddetails
                       key={index}
                       cardKey={`card-${index}`}
                        image={card.image}
                        description={card.description}
                    />
                )
                )}
            </div>
    </>


  )
}

export default FactsFrame2;
