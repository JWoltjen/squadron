import React, {useContext, useEffect, useState} from 'react'

import {SquadronListContext} from '../contexts/SquadronContext'

function MemberForm() {
    const {addMember, editItem, editMember} = useContext(SquadronListContext)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [nationality, setNationality] = useState('')
    const [rank, setRank] = useState('')
    const [eyeSight, setEyeSight] = useState(0)
    const [awareness, setAwareness] = useState(0)
    const [aggression, setAggression] = useState(0)
    const [communication, setCommunication] = useState(0)
    const [gunnery, setGunnery] = useState(0)

    const handleChange = e => {
        setDescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        if(editItem === null){
            addMember(name, image, nationality, rank, description, eyeSight, awareness, aggression, communication, gunnery)
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
            editMember(name, image, nationality, rank, description, eyeSight, awareness, aggression, communication, gunnery, editItem.id)
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


    useEffect(() => {
        if(editItem !==null){
            setName(editItem.name)
            setImage(editItem.image)
            setNationality(editItem.nationality)
            setRank(editItem.rank)
            setDescription(editItem.description)
            setEyeSight(editItem.eyeSight)
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
                            required
                        />
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
                            onChange={updateNationality}
                            placeholder='Nationality'
                            required
                            />
                            <input 
                            className='member-form-rank' 
                            type='text' 
                            onChange={updateRank}
                            placeholder='Rank'
                            required
                            />
                            <input 
                            type='range'
                            onChange={updateEyeSight}
                            placeholder='Eyesight'
                            min="0"
                            max='5'
                            required
                            />
                            <input 
                            type='range'
                            onChange={updateAwareness}
                            placeholder='Awareness'
                            min="0"
                            max='5'
                            required
                            />
                            <input 
                            type='range'
                            onChange={updateAggression}
                            placeholder="Aggression"
                            min="0"
                            max='5'
                            required
                            />
                            <input
                            type='range'
                            onChange={updateCommunication}
                            placeholder='Communication'
                            min="0"
                            max='5'
                            required
                            />
                            <input 
                            type='range'
                            onChange={updateGunnery}
                            placeholder='Gunnery'
                            min="0"
                            max='5'
                            required
                            />
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
