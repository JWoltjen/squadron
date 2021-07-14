import React, {useContext, useEffect, useState} from 'react'

import {FlightListContext} from '../contexts/FlightContext'

function FlightForm() {
    const {addFlight, clearFlight, editItem, editFlight} = useContext(FlightListContext)
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [kills, setKills] = useState(0)
    const [wingmen, setWingmen] = useState(0)
    const [losses, setLosses] = useState(0)

    const handleChange = e => {
        setDescription(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault(); 
        if(editItem === null){
            addFlight(description, date,kills,wingmen,losses )
            setDescription('')
            setDate('')
            setKills(0)
            setWingmen(0)
            setLosses(0)
        } else {
            editFlight(description, date, kills, wingmen, losses, editItem.id)
    }
    }; 
    const updateDate = e => {
        setDate(e.target.value)
    }
       const updateKills = e => {
        setKills(e.target.value)
    }
       const updateWingmen = e => {
        setWingmen(e.target.value)
    }
      const updateLosses = e => {
        setLosses(e.target.value)
    }

    useEffect(() => {
        if(editItem !==null){
            setDescription(editItem.description)
            setDate(editItem.date)
            setWingmen(editItem.wingmen)
            setKills(editItem.kills)
            setLosses(editItem.losses)
            console.log(editItem)
        } else {
            setDescription('')
        }
    }, [editItem]); 

    return (
        <>
        <h3 className='flight-form-header'>
            Enter new flight: 
        </h3>
        <form onSubmit={handleSubmit} className='flight-form'>
            <input 
                className='flight-form-date' 
                type='date' 
                onChange={updateDate}
                required
                />
            <textarea
            onChange={handleChange}
            value={description}
            className='flight-form-description'
            placeholder='Add description'
            required
        />
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
            </span>
            <div className='flight-form-buttons'>
                <button type='submit' className='btn-add-flight-btn'>Submit</button>
                <button onClick={clearFlight} type='button' className='btn-clear-flight-btn'>Clear</button>
            </div>
        </form>
        </>
    )
}; 

export default FlightForm
