import React, {useContext, useEffect, useState} from 'react'

import {SquadronListContext} from '../contexts/SquadronContext'

function MemberForm() {
    const {addMember, editItem, editMember} = useContext(SquadronListContext)
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [nationality, setNationality] = useState('')
    const [rank, setRank] = useState('')

    const handleChange = e => {
        setDescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        // if(editItem === null){
        //     addMember(name, nationality, rank, description)
        //     setName('')
        //     setNationality('')
        //     setRank('')
        //     setDescription('')
        // } else {
        //     editMember(name, image, nationality, rank, description, editItem.id)
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

    // useEffect(() => {
    //     if(editItem !==null){
    //         setDescription(editItem.description)
    //         setName(editItem.name)
    //         setNationality(editItem.nationality)
    //         setImage(editItem.image)
    //         console.log(editItem)
    //     } else {
    //         setDescription('')
    //     }
    // }, [editItem]); 

    return (
        <>
        <h3 className='member-form-header'>
            Enter new member: 
        </h3>
        <form onSubmit={handleSubmit} className='squadron-member-card'>
            <input 
                className='member-form-name' 
                type='text' 
                onChange={updateName}
                required
                />
                 <input 
                className='member-form-nationality' 
                type='text' 
                onChange={updateNationality}
                required
                />
                <input 
                className='member-form-rank' 
                type='text' 
                onChange={updateRank}
                required
                />
            <input type="text"
            onChange={handleChange}
            value={description}
            className='member-form-description'
            placeholder='Add description'
            required
        />
{/* 
        <span className='flight-form-stats'>
                <label for="kills">Kills</label>
                <input 
                    type='number' 
                    id='kills' 
                    name='kills' 
                    min='0' 
                    max='5' 
                    value={kills} 
                    onChange={updateKills}
                    required
                />
                <label for='wingmen'>Wingmen</label>
            <input 
                type='number' 
                id='wingmen' 
                name='wingmen' 
                min='0' 
                max='4' 
                value={wingmen} 
                onChange={updateWingmen}
                required
            />
                <label for='losses'>Losses</label>
            <input 
                type='number' 
                id='losses' 
                name='losses' 
                min='0' 
                max='4' 
                value={losses} 
                onChange={updateLosses}
                required
            />
            </span> */}

            <div className='member-form-buttons'>
                <button type='submit' className='btn-add-flight-btn'>Submit</button>
            </div>
        </form>
        </>
    )
}; 

export default MemberForm
