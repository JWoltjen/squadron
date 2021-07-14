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

    useEffect(() => {
        localStorage.setItem("squadron", JSON.stringify(members))
    }, [members])
    
    const [editItem, setEditItem] = useState(null)

    const addMember = (name, image, nationality, rank, description) => {
        setMembers([...members, {id: uuidv4(), name: name, image: image, nationality: nationality, rank: rank, description: description, }])
    };

    const removeMember = id => {
        setMembers(members.filter(member => member.id !==id))
    }; 

    const clearList = () => {
        setMembers([])
    }
    const findMember = (id) => {
        const item = members.find(member => member.id === id)
        setEditItem(item)
    }
    const editMember = (id, name, image, nationality, rank, description) => {
        const newMembers = members.map(member => (member.id === id ? {name, image, nationality, rank, description} : member))
        setMembers(newMembers)
        setEditItem(null)
    }
  return (
        <SquadronListContext.Provider value={{members}}>
            {props.children}
        </SquadronListContext.Provider>
    )
}

export default SquadronContextProvider; 
