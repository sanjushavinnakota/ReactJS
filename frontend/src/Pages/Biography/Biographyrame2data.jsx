import biography from '../../api/biography.json'
const Biography = () => {
    return (
        <>
            {
                biography.map((curElem) => {
                    return (
                        <div className='Biography-row'>

                            <div className='Biography-column'>
                                <p>{curElem.num} </p>
                                <p>{curElem.year}</p>
                            </div>

                            <div className='Biography-column'>
                                <h3>{curElem.heading}</h3>
                                <p>{curElem.para}</p>
                            </div>

                        </div>
                    );
                })
            }
        </>
    )
}
export default Biography;