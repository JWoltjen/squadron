import React, {useState, createContext} from 'react'
import {uuidv4} from 'uuid'

export const FlightContext = createContext() 

const FlightContextProvider = props => {
   const [flights, setFlights] = useState([
        {id: uuidv4(), date: 'July 4, 2021', description: "this is a test"}

    ])
    return (
        <FlightContext.Provider value={{flights}}>
            {props.children}
        </FlightContext.Provider>
    )
}

export default FlightContextProvider; 
