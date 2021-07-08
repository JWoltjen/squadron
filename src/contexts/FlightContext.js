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

    const [editItem, setEditItem] = useState(null)

    const addFlight = (description, date) => {
        setFlights([...flights, {id: uuidv4(), date: date, description: description}])
    };

    const removeFlight = id => {
        setFlights(flights.filter(flight => flight.id !==id))
    }; 

    const clearList = () => {
        setFlights([])
    }
    const findFlight = (id) => {
        const item = flights.find(flight => flight.id === id)
        setEditItem(item)
    }
    const editFlight = (description, date, id) => {
        const newFlights = flights.map(flight => (flight.id === id ? {description, date, id} : flight))
        setFlights(newFlights)
        setEditItem(null)
    }
    

    return (
        <FlightListContext.Provider value={{flights, addFlight, removeFlight, clearList, findFlight, editFlight, editItem}}>
            {props.children}
        </FlightListContext.Provider>
    )
}

export default FlightContextProvider; 
