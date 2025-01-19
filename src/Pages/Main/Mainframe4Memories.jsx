import MemoriesMain from '../../api/MemoriesMain.json';
const Mainframe4Memories = () => {
  

    
    return (
        <>
            {
                MemoriesMain.map((curElem) => {
                    return(
                        <div class="main-column2" >
                        <img className="imgclass" src={curElem.img_url} alt="image-loading" style={{ width: "90%", height: "80%" }} />
                        <div class="main-quotes3">
                            <h6>{curElem.name}</h6>
                            <p>{curElem.description}</p>
                            <button>Read more</button>

                        </div>
                    </div>
                    );
                })
            }

        </>
    )
}
    export default  Mainframe4Memories;