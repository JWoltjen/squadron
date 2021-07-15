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
        if(editItem === null){
            addMember(name, image, nationality, rank, description)
            setName('')
            setImage('')
            setNationality('')
            setRank('')
            setDescription('')
        } else {
            editMember(name, image, nationality, rank, description, editItem.id)
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


    useEffect(() => {
        if(editItem !==null){
            setName(editItem.name)
            setImage(editItem.image)
            setNationality(editItem.nationality)
            setRank(editItem.rank)
            setDescription(editItem.description)
            console.log(editItem)
        } else {
            setDescription('')
        }
    }, [editItem]); 

    return (
        <>
        <h3 className='member-form-header'>
            Enter new member: 
        </h3>
        <form onSubmit={handleSubmit} className='squadron-member-card'>
            <div className='input-wrapper'>
                    <div className='member-form-image'>
                        Photo
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
