import React, {useState, useEffect, createContext} from 'react'
import {v4 as uuidv4} from 'uuid'

export const SquadronListContext = createContext() 

const SquadronContextProvider = props => {
        const initialState = JSON.parse(localStorage.getItem('members'))

        // const initialState = 
        // [{
        //     id: uuidv4(),
        //     name: 'Wolf', 
        //     image: 'https://www.langleyadvancetimes.com/wp-content/uploads/2017/04/5907langleymiller-vintage.jpg',
        //     nationality: "United States", 
        //     rank: 'Lt. Colonel', 
        //     description: 'Founding member of the Bloody Red Squadron in June 2013. Pioneer of online F-86 combat, first in War Thunder and later on in DCS. He displayed an obsessive relationship with the F-86F, scoring over 5000 victories with it in War Thunder over a 3-year period. After some time away, in early 2021, Wolf returned to DCS to pilot the Sabre on Korea 1952. There, he quickly developed a reputation as the server\'s best F-86 pilot, scoring an average of 20 victories a month.', 
        //     eyesight: 5,
        //     awareness: 5, 
        //     aggression: 5, 
        //     communication: 3, 
        //     gunnery: 2
        // }]
    const [members, setMembers] = useState(initialState)

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
