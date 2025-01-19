import React from 'react';
import quotes from '../../api/quotesData';
import Facts from './Facts';
import './FactsFrame2.css'
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
const FactsFrame2 = () => {

    return (
      <>
      <div className="Quick-row">
      <Facts/>
      </div>
      <div className="Quick-row">
      <Facts/>
      </div>
      <div className="Quick-row">
      <Facts/>
      </div>
      <div className="Quick-row">
      <Facts/>
      </div>
       
      </>
  
    
  )
}

export default FactsFrame2;
