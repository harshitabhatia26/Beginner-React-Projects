import React from "react";
import img from './logo192.png';

function Header() {
    return(
        <header>
        <nav className="navbar text-white border-bottom border-info container-fluid">
            <div className=" d-inline-flex align-items-center">
            <img src={img} alt="react logo" width="40px" className="mx-2 img-responsive"></img>
            <h3>React Facts</h3>
            </div>
            <ul className="list-unstyled align-bottom d-flex flex-row align-items-center pt-2">
                <li className="col-sm">Pricing</li>
                <li className="col-sm">About</li>
                <li className="col-sm">Contact</li>
            </ul>
        </nav>
      </header>
    )
}

export default Header;