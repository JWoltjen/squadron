import React, {useState, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const FlightListContext = createContext() 

const FlightContextProvider = props => {
   const [flights, setFlights] = useState([
        {
            id: uuidv4(),
            date: 'July 4, 2021', 
            description: "this is a test", 
            kills: 0, 
            wingmen: 0, 
            lossses: 0
        }
    ])

    const [editItem, setEditItem] = useState(null)

    const addFlight = (description, date, kills, wingmen, losses) => {
        setFlights([...flights, {id: uuidv4(), date: date, description: description, kills: kills, wingmen: wingmen, losses:losses}])
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
    const editFlight = (description, date, id, kills, wingmen, losses) => {
        const newFlights = flights.map(flight => (flight.id === id ? {description, date, id, kills, wingmen, losses} : flight))
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
