import React, {useState, useEffect, useContext} from 'react'
import {Link} from 'react-router-dom'; 
import {FlightListContext} from '../contexts/FlightContext'

function Navbar() {
    const {flights} = useContext(FlightListContext)
    const [kills, setKills] = useState(flights.reduce((killTotal, currentFlight) => {
                    killTotal += Number(currentFlight.kills)
                    console.log(flights)
                    return killTotal
                }, 0))

    const [losses, setLosses] = useState(flights.reduce((lossTotal, currentFlight) => {
                        lossTotal += Number(currentFlight.losses)
                        return lossTotal
                    }, 0))
    return (
        <nav>
            <h3 className="logo">Logo</h3>
            <ul className='links'>
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
            <div className='burger'>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className='stats'>
                <h3>
                    Flights: {flights.length}
                </h3>
                <h3>
                    Kills: {kills}
                </h3>
                <h3>
                    Losses: {losses}
                </h3>
            </div>
        </nav>
    )
}

export default Navbar
