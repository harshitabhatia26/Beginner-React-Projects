import img from './images/photo-grid.png'

function Static() {
    return(
        <div className="collage">
            <img src={img} alt="airbnb experiences" className='img-fluid mx-auto px-5 my-4 d-block'></img>
            <h1 className='font-weight-bold px-5 my-1'>Online Experiences</h1>
            <h3 className='font-weight-light px-5 py-1 my-1'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h3>
        </div>
    )
}

export default Static;