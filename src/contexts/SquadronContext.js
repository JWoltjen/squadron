import React, {useState, useEffect, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const SquadronListContext = createContext() 


const SquadronContextProvider = props => {
        const initialState = JSON.parse(localStorage.getItem('squadron')) ||
        {
            id: uuidv4(),
            name: 'Wolf', 
            img: '',
            nationality: "Unite States", 
            rank: 'Captain', 
            description: 'Wolf is me.', 
        }
    const [members, setMembers] = useState(initialState)

  return (
        <SquadronListContext.Provider value={{members}}>
            {props.children}
        </SquadronListContext.Provider>
    )
}

export default SquadronContextProvider; 
