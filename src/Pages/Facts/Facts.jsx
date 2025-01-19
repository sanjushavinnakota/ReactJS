import React from 'react'
import quotesData from '../../api/quotesData';
import './FactsFrame2.css'
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
const Facts = () => {
  return (

    <>
      {
      quotesData.QuickFacts.map((curElem, index) => {
        return (
          <div class="Quick-column">
            <img className src="./img/q15.png" alt="image-loading" />
            <p>Srila Prabhupada published his book Krishna Consciousness - The Topmost Yoga System in 1970.</p>
            <div className="icons">
              <IoMdShare />
              <IoHeartOutline class="Heart" alt="image-loading" />
              <span class="count">0</span>
            </div>
          </div>
        );
      })}
    </>


  )
}

export default Facts;

