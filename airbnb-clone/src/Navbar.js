import img from './images/airbnb-logo.png'

function Navbar() {
    return(
        <div className="navbar border-bottom p-4" >
            <img src={img} alt="airbnb logo" width="100vw"></img>
        </div>
    )
}

export default Navbar;