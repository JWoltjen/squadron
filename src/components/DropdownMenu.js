import React, {useState, useRef, useContext} from 'react'
import {Link} from 'react-router-dom'; 
import {FlightListContext} from '../contexts/FlightContext'

const DropdownMenu = () => {
    const {flights} = useContext(FlightListContext)
    const [kills, setKills] = useState(flights.reduce((killTotal, currentFlight) => {
                    killTotal += Number(currentFlight.kills)
                    return killTotal
                }, 0))

    const [losses, setLosses] = useState(flights.reduce((lossTotal, currentFlight) => {
                        lossTotal += Number(currentFlight.losses)
                        return lossTotal
                    }, 0))
    const dropdownRef = useRef(null); 
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive); 

    return (
       <div className='menu-container'>
           <button onClick={onClick} className="menu-trigger">
               <span></span>
           </button>
           <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
               <ul>
                    <Link to ='/Squadron'>
                        <li className='link'>Squadron</li>
                    </Link>
                     <Link to="/PhotoGallery">
                         <li className='link'>Photo Gallery</li>
                    </Link>
                     <Link to='/FlightLog'>
                         <li className='link'>Flight Log</li>
                     </Link>
                    <li className='link'>Flights: {flights.length}</li>
                    <li className='link'> Kills: {kills}</li>
                    <li className='link'> Losses: {losses}</li>
               </ul>
           </nav>
       </div>
    )
}

export default DropdownMenu