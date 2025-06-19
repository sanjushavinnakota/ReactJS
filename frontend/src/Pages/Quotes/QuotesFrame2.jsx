import React from 'react';
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import quotesData from '../../api/quotesData';
import Carddetails from '../../components/Cards/card';
import "./QuotesFrame2.css"

const QuotesFrame2 = () => {
    const image = "/img/quote.png";
    return (
        <>

            <div className='Quotes-Quickfacts'>
                {quotesData.Quotes.map((card,index) => (
                    <Carddetails
                        key={index}
                        image={image}
                        description={card.description}
                        cardKey={`card-${index}`}
                    />
                )
                )}
            </div>
        </>
    );
}

export default QuotesFrame2;
