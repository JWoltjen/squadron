import React, {useContext} from 'react'
import {FlightListContext} from '../contexts/FlightContext'

function Flight({flight}) {
    const {removeFlight, findFlight} = useContext(FlightListContext)
    return (
        <div className='flight-card'>
            <h3 className='flight-card-date'>{flight.date}</h3>
            <p className='flight-card-description'>{flight.description}</p>
            <ul className='flight-stats'>
                <li>Kills: {flight.kills}</li>
                <li>Wingmen: {flight.wingmen}</li>
                <li>Losses: {flight.losses}</li>
            </ul>
            <div className='flight-card-buttons'>
                <button 
                    onClick={() => removeFlight(flight.id)} 
                    className='btn-delete-flight-btn'
                >Delete</button>

                <button 
                    onClick={() => findFlight(flight.id)}   
                    className='btn-edit-flight-btn'
                >Edit</button>
            </div>
        </div>
    )
}

export default Flight
