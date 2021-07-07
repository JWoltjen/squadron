import React, {useContext} from 'react'
import {FlightListContext} from '../contexts/FlightContext'

function Flight({flight}) {
    const {removeFlight, findFlight} = useContext(FlightListContext)
    return (
        <div className='flight-card'>
            <h3>{flight.date}</h3>
            <p>{flight.description}</p>
            <div>
                <button className='btn-delete-flight-btn'>Delete</button>
                <button className='btn-edit-flight-btn'>Edit</button>

            </div>
        </div>
    )
}

export default Flight
