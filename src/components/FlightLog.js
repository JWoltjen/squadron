import React, {useContext} from 'react'
import {FlightListContext} from '../contexts/FlightContext'
import FlightForm from './FlightForm'
import Flight from './Flight'

function FlightLog() {
    const {flights} = useContext(FlightListContext)
    return (
        <div className='flight-log-container'>
            {flights.length ? (
            <ul className='flight-log'>
                {flights.map(flight => {
                    return <Flight flight={flight} key={flight.id} description={flight.description} date={flight.date} /> 
                })}
            </ul>
            ): (
                <div className="no-flights">No Flights</div>
            )}
            <FlightForm/>
        </div>
    )
}

export default FlightLog
