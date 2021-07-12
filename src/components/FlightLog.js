import React, {useContext} from 'react'
import {FlightListContext} from '../contexts/FlightContext'
import FlightForm from './FlightForm'
import Flight from './Flight'

function FlightLog() {
    const {flights} = useContext(FlightListContext)
    return (
        <>
        <div className='flight-log-container'>
             <h3 className='flight-log-header'>
                Flight Log
                </h3>
            {flights.length ? (
            <ul className='flight-log'>
                {flights.map(flight => {
                    return <Flight flight={flight} key={flight.id} description={flight.description} date={flight.date} kills={flight.kills} wingmen={flight.wingmen} losses={flight.losses} /> 
                })}
            </ul>
            ): (
                <div className="no-flights">No Flights</div>
            )}
            <FlightForm/>
        </div>
        </>
    )
}

export default FlightLog
