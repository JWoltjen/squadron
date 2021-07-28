import React, {useState, useEffect, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const SquadronListContext = createContext() 

const SquadronContextProvider = props => {
    const initialState = localStorage.getItem("members")

    const [members, setMembers] = useState(initialState ? JSON.parse(initialState) : [{
        name: "Wolf",
        image: "https://thislandpress.com/wp-content/uploads/2014/12/risner.jpg",
        nationality: "United States",
        rank: "Major", 
        description: "Major Jeffrey 'Wolf' Woltjen originally began flying virtual combat missions on the popular MMO Warthunder in 2012. There, he became one of the founding members of the Bloody Red Squadron in June 2013, and it quickly became one of the leading squadrons amongst a player pool of 40,000. Wolf soon took an interest in F-86 v. MiG-15 combat, which quickly turned into an obsession. Through 2014-2018, Wolf became one of the most widely recognizable jet jockeys within the Warthunder community. After taking a short period off, he returned to DCS in 2021 where he again quickly developed a reputation within the Korean War community as being the deadliest Sabre pilot on the server.", 
        eyesight: 5, 
        awareness: 5, 
        aggression: 5, 
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
