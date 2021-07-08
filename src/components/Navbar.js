import React from 'react'
import {Link} from 'react-router-dom'; 

function Navbar() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to ='/BRS'>
                    <li className='link'>BRS</li>
                </Link>
                <Link to="/PhotoGallery">
                     <li className='link'>Photo Gallery</li>
                </Link>
                <Link to='/FlightLog'>
                     <li className='link'>Flight Log</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
