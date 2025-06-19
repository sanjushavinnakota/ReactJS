
import './Mainframe4.css';
import Carddetails from '../../components/Cards/card';
import cards from '../../api/cards';
const Mainframe4 = () => {
    
    return (
        <>
            <div className="main" >
                {cards.main.map((card,index) => (
                    <Carddetails
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                        buttons={[ 
                            { text: "Read More",className:"bt1", onClick: () => alert("Read more clicked!") },
                            
                          ]}
                        showIcons={false}
                    />
                ))}

            </div>
        </>
    )
}
export default Mainframe4;