import React, {useState, useContext} from 'react'
import {SquadronListContext} from '../contexts/SquadronContext'
import Member from './Member'
import MemberForm from './MemberForm'

function Squadron() {
    const {members} = useContext(SquadronListContext)
    return (
        <div className='squadron-container'>
            {members.length ? (
            <ul className='flight-log'>
                {members.map(member => {
                    return <Member member={member} key={member.id} name={member.name} image={member.image} nationality={member.nationality} rank={member.rank} description={member.description} /> 
                })}
            </ul>
            ): (
                <div className="no-flights">No Members</div>
            )}
            <MemberForm/>
        </div>
    )
}

export default Squadron
