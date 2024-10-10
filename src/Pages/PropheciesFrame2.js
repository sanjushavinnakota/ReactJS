import React from 'react'
import './PropheciesFrame2.css'
import { IoMdShare } from "react-icons/io";
import { IoHeartOutline } from "react-icons/io5";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";




const PropheciesFrame2 = () => {
  return (
    <div>
      
<div className="Prophecies-row">
  
  <div className="Prophecies-column" style={{background: "linear-gradient(180deg, #6E5690 0%, #191919 62.29%)"
}}>

  <img src="./img/thakura.png" Sri Bhaktivinoda Thakura/>
    <h2>Sri Bhaktivinoda Thakura</h2>
  
    <p>Sriman Mahaprabhu [Sri Chaitanya] did not descend with His associates to deliver a certain number of human beings in the land of India, but rather His purpose was to deliver and uplift all living beings in all countries of the world by practicing the eternal religion of all souls.</p>
   <div className='Prophecies-arrow'>
    <IoIosArrowDropleftCircle style={{color: "#FACAAD"}} />

    <IoIosArrowDroprightCircle style={{color: "#FACAAD"}}/>
</div>

   
     
  </div>
  <div className="Prophecies-column"style={{background: "linear-gradient(180deg, #A6CFE3 0%, #191919 80.52%)"
   }} >
  <img src="./img/mahaprabhu.png" />
    <h2>Sri Chaitanya Mahaprabhu</h2>
    <p>Sriman Mahaprabhu [Sri Chaitanya] did not descend with His associates to deliver a certain number of human beings in the land of India, but rather His purpose was to deliver and uplift all living beings in all countries of the world by practicing the eternal religion of all souls.</p>
    
    <div className='Prophecies-arrow'>
    <IoIosArrowDropleftCircle style={{color: "#FACAAD"}} />

    <IoIosArrowDroprightCircle style={{color: "#FACAAD"}}/>
</div>
    
  </div>
  <div className="Prophecies-column"style={{background: "linear-gradient(180deg, #EFCB83 0%, #191919 80.52%)"
}} >
  <img src="./img/krishna.png" />
    <h2>Lord Sri Krishna</h2>
    <p>Lord Jagannath, the Supreme Lord Sri Hari Himself, spoke these attractive words for the welfare of all:

The mlecchas who are born from mixed countries ruled by descendants of Kasyapa (demons) and the sudras will become brahmanas by initiation. They will wear sikhas and brahmana threads and will become well versed in the uncontaminated fruit of the Vedas (Srimad Bhagavatam). They will worship Me by the Yajna prescribed by the Lord of Lords, the protector of Sacidevi, Sri Chaitanya Mahaprabhu.</p>
   
<div className='Prophecies-arrow'>
    <IoIosArrowDropleftCircle style={{color: "#FACAAD",height:"10%"}} />

    <IoIosArrowDroprightCircle style={{color: "#FACAAD"}}/>
</div>
    
  </div>
  <div className="Prophecies-column"style={{background: "linear-gradient(180deg, #FF8A40 0%, #191919 62.29%)"
}} >
  <img src="./img/sri.png" />
    <h2>Sri Bhaktivinoda Thakura</h2>
    <p>The principle of kirtana, as the future church of the world, invites all classes of men without distinction of caste, creed, or clan to the highest cultivation of the spirit. This church will extend all over the world and take the place of all sectarian churches which exclude outsiders from the precincts of their mosque, church or temple.</p>
    <div className='Prophecies-arrow'>
    <IoIosArrowDropleftCircle style={{color: "#FACAAD"}} />

    <IoIosArrowDroprightCircle style={{color: "#FACAAD"}}/>
</div>
  </div>
  
  
  
</div>
</div>
    )
  }


export default PropheciesFrame2;
