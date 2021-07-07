import React, {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const FlightListContext = createContext() 

const FlightContextProvider = props => {
   const [flights, setFlights] = useState([
        {
            id: uuidv4(),
            date: 'July 4, 2021', 
            description: "this is a test"
        }
    ])

    const [editFlight, setEditFlight] = useState(null)

    const addFlight = (description) => {
        setFlights([...flights, {id: uuidv4(), description}])
    };

    const removeFlight = id => {
        setFlights(flights.filter(flight => flight.id !==id))
    }; 

    const clearList = () => {
        setFlights([])
    }
    const findFlight = (id) => {
        const flight = flights.find(flight => flight.id === id)
    }

    return (
        <FlightListContext.Provider value={{flights, addFlight, removeFlight, clearList, findFlight}}>
            {props.children}
        </FlightListContext.Provider>
    )
}

export default FlightContextProvider; 
