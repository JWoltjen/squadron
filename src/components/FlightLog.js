import React, {useContext} from 'react'
import {FlightListContext} from '../contexts/FlightContext'
import Flight from './Flight'

function FlightLog() {
    const {flights} = useContext(FlightListContext)
    return (
        <div>
            <ul className='flight-log'>
                {flights.map(flight => {
                    return <Flight flight={flight} key={flight.id} /> 
                })}
            </ul>
        </div>
    )
}

export default FlightLog
