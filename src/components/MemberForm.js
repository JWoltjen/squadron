import React, {useContext, useEffect, useState} from 'react'
import {SquadronListContext} from '../contexts/SquadronContext'
import sabrepilot1 from '../portraits/sabrepilot1.jpeg'
import sabrepilot2 from '../portraits/sabrepilot2.jpeg'
import sabrepilot3 from '../portraits/sabrepilot3.jpeg'
import sabrepilot4 from '../portraits/sabrepilot4.png'
import sabrepilot5 from '../portraits/sabrepilot5.jpeg'
import sabrepilot6 from '../portraits/sabrepilot6.webp'
import sabrepilot7 from '../portraits/sabrepilot7.jpeg'
import sabrepilot8 from '../portraits/sabrepilot8.jpeg'

function MemberForm() {
    const {addMember, editItem, editMember} = useContext(SquadronListContext)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [nationality, setNationality] = useState('')
    const [rank, setRank] = useState('')
    const [eyesight, setEyeSight] = useState(0)
    const [awareness, setAwareness] = useState(0)
    const [aggression, setAggression] = useState(0)
    const [communication, setCommunication] = useState(0)
    const [gunnery, setGunnery] = useState(0)

    const portraits = [
        sabrepilot1, sabrepilot2, sabrepilot3, sabrepilot4, sabrepilot5, sabrepilot6, sabrepilot7, sabrepilot8
    ]
    const handleChange = e => {
        setDescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        if(editItem === null){
            addMember(name, image, nationality, rank, description, eyesight, awareness, aggression, communication, gunnery)
            setName('')
            setImage('')
            setNationality('')
            setRank('')
            setDescription('')
            setEyeSight(0)
            setAwareness(0)
            setAggression(0)
            setCommunication(0)
            setGunnery(0)
        } else {
            editMember(name, image, nationality, rank, description, eyesight, awareness, aggression, communication, gunnery, editItem.id)
        } 
    }
    const updateNationality = e => {
        setNationality(e.target.value)
    }
       const updateRank = e => {
        setRank(e.target.value)
    }
       const updateName = e => {
        setName(e.target.value)
    }
      const updateImage = e => {
        setImage(e.target.value)
    }
    const updateEyeSight = e => {
        setEyeSight(e.target.value)
    }
    const updateAwareness = e => {
        setAwareness(e.target.value)
    }
    const updateAggression = e => {
        setAggression(e.target.value)
    }
    const updateCommunication = e => {
        setCommunication(e.target.value)
    }
    const updateGunnery = e => {
        setGunnery(e.target.value)
    }
    const getRandomPortrait = () => {
        setImage(portraits[0])
    }


    useEffect(() => {
        if(editItem !==null){
            setName(editItem.name)
            setImage(editItem.image)
            setNationality(editItem.nationality)
            setRank(editItem.rank)
            setDescription(editItem.description)
            setEyeSight(editItem.eyesight)
            setAwareness(editItem.awareness)
            setAggression(editItem.aggression)
            setCommunication(editItem.communication)
            setGunnery(editItem.gunnery)
        } else {
            setDescription('')
        }
    }, [editItem]); 

    return (
        <>
        <h3 className='member-form-header'>
            Enter new member: 
        </h3>
        <form onSubmit={handleSubmit} className='squadron-member-card-form'>
            <div className='input-wrapper'>
                    <div className='member-form-image-container'>
                            Photo
                         <input
                            className='member-form-image-input'
                            type='text'
                            onChange={updateImage}
                            placeholder='Enter image url'
                        />
                        <button onClick={getRandomPortrait}>
                            Random
                        </button>
                    </div>
                    <div className='input-container'>
                        <input 
                            className='member-form-name' 
                            type='text' 
                            onChange={updateName}
                            placeholder='Name'
                            required
                            />
                        
                            <input 
                            className='member-form-nationality' 
                            type='text' 
                            value={nationality}
                            onChange={updateNationality}
                            placeholder='Nationality'
                            required
                            />
                            <input 
                            className='member-form-rank' 
                            type='text' 
                            value={rank}
                            onChange={updateRank}
                            placeholder='Rank'
                            required
                            />
                            <input 
                            type='range'
                            value={eyesight}
                            onChange={updateEyeSight}
                            placeholder='Eyesight'
                            min="0"
                            max='5'
                            required
                            />
                            Eyesight: {eyesight}
                            <input 
                            type='range'
                            value={awareness}
                            onChange={updateAwareness}
                            placeholder='Awareness'
                            min="0"
                            max='5'
                            required
                            />
                            Situational Awareness: {awareness}
                            <input 
                            type='range'
                            value={aggression}
                            onChange={updateAggression}
                            placeholder="Aggression"
                            min="0"
                            max='5'
                            required
                            />
                            Aggression: {aggression}
                            <input
                            type='range'
                            value={communication}
                            onChange={updateCommunication}
                            placeholder='Communication'
                            min="0"
                            max='5'
                            required
                            />
                            Communication: {communication}
                            <input 
                            type='range'
                            value={gunnery}
                            onChange={updateGunnery}
                            placeholder='Gunnery'
                            min="0"
                            max='5'
                            required
                            />
                            Gunnery: {gunnery}
                            </div>
                </div>
            <textarea
            onChange={handleChange}
            value={description}
            className='member-form-description'
            placeholder='Add description'
            required
        />

            <div className='member-form-buttons'>
                <button type='submit' className='btn-member-btn'>Submit</button>
            </div>
        </form>
        </>
    )
};  


export default MemberForm
