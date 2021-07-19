import React, {useState, useEffect, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const SquadronListContext = createContext() 

const SquadronContextProvider = props => {
        const initialState = 
        [{
            id: uuidv4(),
            name: 'Wolf', 
            image: 'https://www.langleyadvancetimes.com/wp-content/uploads/2017/04/5907langleymiller-vintage.jpg',
            nationality: "United States", 
            rank: 'Captain', 
            description: 'Founding member of the Bloody Red Squadron.', 
        }]
    const [members, setMembers] = useState(initialState)

    useEffect(() => {
        localStorage.setItem("members", JSON.stringify(members))
    }, [members])
    
    const [editItem, setEditItem] = useState(null)

    const addMember = (name, image, nationality, rank, description) => {
        setMembers([...members, {id: uuidv4(), name: name, image: image, nationality: nationality, rank: rank, description: description}])
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
        <SquadronListContext.Provider value={{members, addMember, removeMember, clearList, findMember, editMember, editItem}}>
            {props.children}
        </SquadronListContext.Provider>
    )
}

export default SquadronContextProvider; 
