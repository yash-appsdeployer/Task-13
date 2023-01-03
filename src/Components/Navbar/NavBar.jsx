import React from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'


const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img className='navbar-logo' src={Logo} alt='logo' />
                    <a className="navbar-brand" href="#Home">Drip Design</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item text-right">
                                <a className="nav-link active" aria-current="page" href="#Home">Home</a>
                            </li>

                            <li className="nav-item text-right">
                                <a className="nav-link active" aria-current="page" href="#Service">Service</a>
                            </li>

                            <li className="nav-item text-right">
                                <a className="nav-link active" aria-current="page" href="#About">About</a>
                            </li>

                            <li className="nav-item text-right">
                                <a className="nav-link active" aria-current="page" href="#Team">Our Team</a>
                            </li>

                            <li className="nav-item text-right">
                                <a className="nav-link active" href="#Portfolio">Portfolio</a>
                            </li>

                            <li className="nav-item text-right">
                                <a className="nav-link active" aria-current="page" href="#Contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar