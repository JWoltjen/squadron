import React, {useState, useEffect, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const SquadronListContext = createContext() 

const SquadronContextProvider = props => {
    const initialState = localStorage.getItem("members")

    const [members, setMembers] = useState(/*initialState ? JSON.parse(initialState) :*/ [{
        name: "Wolf",
        image: "none",
        nationality: "United States",
        rank: "major", 
        description: "none", 
        eyesight: 5, 
        awareness: 5, 
        aggression: 4, 
        communication: 3,
        gunnery: 2
    }])

    useEffect(() => {
        localStorage.setItem("members", JSON.stringify(members))
    }, [members])
    
    const [editItem, setEditItem] = useState(null)

    const addMember = (name, image, nationality, rank, description, eyesight, awareness, aggression, communication, gunnery) => {
        setMembers([...members, {id: uuidv4(), name: name, image: image, nationality: nationality, rank: rank, description: description, eyesight: eyesight, awareness: awareness, aggression: aggression, communication: communication, gunnery: gunnery}])
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
    const editMember = (id, name, image, nationality, rank, description, eyesight, awareness, aggression, communication, gunnery) => {
        const newMembers = members.map(member => (member.id === id ? {name, image, nationality, rank, description, eyesight, awareness, aggression, communication, gunnery} : member))
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
