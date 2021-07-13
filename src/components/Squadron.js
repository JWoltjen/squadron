import React, {useState, useContext} from 'react'


function Squadron() {
    return (
        <div className='squadron-container'>
            <div className='squadron-member-card'>
                <h1 className='squadron-member-name'>Name</h1>
                <h2 className='squadron-member-nationality'>Nationality</h2>
                <h3 className='squadron-rank'>Rank</h3>
                <p className='squadron-description'>Description</p>
            </div>
            <div>
                <ul className='members'>
                </ul>
            </div>
        </div>
    )
}

export default Squadron
