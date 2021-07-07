import React from 'react'
import {Link} from 'react-router-dom'; 
function Navbar() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <li className='link'>BRS</li>
                <li className='link'>Korean War</li>
                <li className='link'>Server Info</li>
                <li className='link'>Flight Log</li>
            </ul>
        </nav>
    )
}

export default Navbar
