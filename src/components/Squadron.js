import React, {useState, useContext} from 'react'
import MemberForm from './MemberForm'

function Squadron() {
    return (
        <div className='squadron-container'>
            <div className='squadron-member-card'>
                <h1 className='squadron-member-name'>Wolf</h1>
                <h5 className='squadron-member-nationality'>United States</h5>
                <h5 className='squadron-rank'>Major</h5>
                <p className='squadron-description'>Description</p>
            </div>
            <MemberForm/>
        </div>
    )
}

export default Squadron
