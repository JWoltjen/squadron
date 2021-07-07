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
                <Link to="/KoreanWar">
                     <li className='link'>Korean War</li>
                </Link>
                <Link to="/ServerInfo">
                    <li className='link'>Server Info</li>
                </Link>
                <Link to='/FlightLog'>
                     <li className='link'>Flight Log</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar
