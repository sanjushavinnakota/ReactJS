import React from 'react';
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import quotesData from'../../api/quotesData';

const QuotesFrame2card = () => {
    return (
        <>
            {quotesData.Quotes.map((curElem, index) => {
                return (
                    <div className="Quotes-row" key={index}>
                        <div className="Quotes-column">
                            <img className="Disappear-image" src={curElem.img_url} alt="image-loading" />
                            <div className="quotes">
                                <p>{curElem.description}</p>
                                <div className="icons">
                                    <IoMdShare />
                                    <IoHeartOutline className="Heart" />
                                    <span className="count">0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default QuotesFrame2card;
