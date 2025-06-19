import React from 'react'
import './Mainframe8.css';
import emiData from '../../api/emiData.json';
import Carddetails from '../../components/Cards/card';
const Mainframe8 = () => {
  
  return (
    <div className='emi'>
       {emiData.map((card,index) =>(

        <Carddetails
        key={index}
        image={card.image}
        title={card.title}
        description={card.description}
        showIcons={false}
        buttons={[ 
          { text: "Read More",className:"bt1", onClick: () => alert("Read more clicked!") },
          
        ]}
        />
    
    ))}
    </div>
  )
}

export default Mainframe8
