import trollface from './Images/troll-face.png'

function Header() {
    return (
        <div className="navbar">
            <div className="d-flex">
            <div className="navbar-brand">
                <img src={trollface} alt="troll face" height="40vw"></img>
            </div>
            Meme Generator
            </div>
            <div className="navright text-align-right d-none d-md-block">
                Generate Your Favourite Memes
            </div>
        </div>
    )
}

export default Header;