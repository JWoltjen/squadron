import React from 'react'
import {FlightListContext} from '../contexts/FlightContext'
function FlightForm() {
    return (
        <form className='form'>
            <input type='date'/>
            <input type="text"
            className='flight-description'
            placeholder='Add description'
            required
            />
            <div className='buttons'>
                <button type='submit' className='btn-add-flight-btn'>Submit</button>
                <button type='submit' className='btn-clear-flight-btn'>Clear</button>
            </div>
        </form>
    )
}

export default FlightForm
