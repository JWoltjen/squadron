import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'; 
import {FlightListContext} from '../contexts/FlightContext'

function Navbar() {
    const {flights} = useContext(FlightListContext)
    const [kills, setKills] = useState(flights.reduce((killTotal, currentFlight) => {
                    killTotal += currentFlight.kills
                    return killTotal
                }, 0))
    const [losses, setLosses] = useState(flights.reduce((lossTotal, currentFlight) => {
                        lossTotal += currentFlight.losses
                        return lossTotal
                    }, 0))
    return (
        <nav>
            <h3>Logo</h3>
            <ul className='nav-links'>
                <Link to ='/Squadron'>
                    <li className='link'>Squadron</li>
                </Link>
                <Link to="/PhotoGallery">
                     <li className='link'>Photo Gallery</li>
                </Link>
                <Link to='/FlightLog'>
                     <li className='link'>Flight Log</li>
                </Link>
            </ul>
            <div className='nav-stats'>
              <h3 className='nav-flight-stat'>
                    Flights: {flights.length}
                </h3>
            <h3 className='nav-flight-stat'>
                Kills: {kills}
            </h3>
            <h3 className='nav-flight-stat'>
                Losses: {losses}
            </h3>
            </div>
        </nav>
    )
}

export default Navbar
