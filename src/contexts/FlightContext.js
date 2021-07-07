import React, {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const FlightListContext = createContext() 

const FlightContextProvider = props => {
   const [flights, setFlights] = useState([
        {id: uuidv4(), date: 'July 4, 2021', description: "this is a test"}

    ])
    return (
        <FlightListContext.Provider value={{flights}}>
            {props.children}
        </FlightListContext.Provider>
    )
}

export default FlightContextProvider; 
