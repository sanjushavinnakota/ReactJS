import Carddetails from "../../components/Cards/card";
import PoetrybyData from "./PoetrybyData";
import "../Poetryfor/PoetryforFrame2.css";
import { MdArrowOutward } from "react-icons/md";
const Poetrybyframe2 = () => {

    return (
        <>
            <div className="poetry">
                {PoetrybyData.map((card) => (
                    <Carddetails
                        image={card.image}
                        description={card.description}
                       showIcons={false}
                        buttons={[ 
                            { text: <MdArrowOutward  size={15}/>,className:"bt1", onClick: () => alert("Read more clicked!") },
                            
                          ]}
                          buttonPosition="side"
                    />
                ))}

            </div>
        </>
   )
}
export default Poetrybyframe2;