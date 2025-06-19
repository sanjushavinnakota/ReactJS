import React from 'react'
import './DmainFrame3.css'
import Carddetails from '../../components/Cards/card';
import cards from '../../api/cards';

const DmainFrame3 = () => {
  const ReadMore = "Read More";
  return (
<>
<div className="Disappearance">
{cards.Disappearance.map((card) => (
<Carddetails 
image={card.image}
title={card.title}
description={card.description}
showIcons={false}
button={ReadMore}


/>
))}
</div>
</>
    )
  }


export default DmainFrame3;