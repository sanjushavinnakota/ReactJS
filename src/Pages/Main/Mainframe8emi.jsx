import emiData from '../../api/emiData.json';
const Mainframe8emi = () => {
    return (
        <>
            {
                emiData.map((curElem) => {
                    return(
                    <div className="main-column3" >
                        <img className="imgclass" src={curElem.img_url} alt="image-loading" style={{ width: "90%", height: "80%" }} />
                        <div class="main-quotes3">
                            <h6>{curElem.name}</h6>
                            <p>{curElem.description}</p>
                            <button>Read More <svg xmlns="http://www.w3.org/2000/svg" width="15" height="21" fill="black
  " class="bi bi-arrow-up-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8m5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707z" />
                            </svg></button>

                        </div>
                    </div>
                    );
                })
            }

        </>
    )
}
export default Mainframe8emi;