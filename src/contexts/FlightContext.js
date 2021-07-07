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
    const addFlight = (description) => {
        setFlights([...flights, {id: uuidv4(), description}])
    }
    return (
        <FlightListContext.Provider value={{flights, addFlight}}>
            {props.children}
        </FlightListContext.Provider>
    )
}

export default FlightContextProvider; 
