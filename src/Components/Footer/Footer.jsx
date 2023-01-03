import React from 'react'
import Logo from '../Assets/logo.png'

const Footer = () => {
    return (
        <div>
            <footer id="sticky-footer" className="flex-shrink-0 py-2 ">
                <div class="container text-center">
                    <img src={Logo} alt='logo' style={{"width":"50px", "height":"50px"}} />
                    <small style={{"fontWeight":"600"}}>Copyright &copy; Drip Design || 2022</small>
                </div>
            </footer>
        </div>
    )
}

export default Footer