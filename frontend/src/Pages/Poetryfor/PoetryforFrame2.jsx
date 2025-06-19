import Carddetails from "../../components/Cards/card";
import PoetryforData from "./PoetryforData";
import { MdArrowOutward } from "react-icons/md";
import "./PoetryforFrame2.css";


const PoetryforFrame2 = () => {
  
  return (
    <>
      <div className="poetry">
        {PoetryforData.map((card) => {
          return(
          
          <Carddetails
            image={card.image}
            description={card.description}
            buttons={[ 
              { text: <MdArrowOutward  size={15}/>,className:"bt1", onClick: () => alert("Read more clicked!") },
              
            ]}
            buttonPosition="side"
            showIcons={false}
            
          />
          )})
        }
      </div>

    </>
  )
}
export default PoetryforFrame2