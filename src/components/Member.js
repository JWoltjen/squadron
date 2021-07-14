import React, {useContext} from 'react'
import {SquadronListContext} from '../contexts/SquadronContext'

function Member({member}) {
    const {removeMember, findMember} = useContext(SquadronListContext)
    return (
       <div className='squadron-member-card'>
                <h1 className='squadron-member-name'>{member.name}</h1>
                <div className='squadron-member-image'>{member.image}</div>
                <h5 className='squadron-member-nationality'>{member.nationality}</h5>
                <h5 className='squadron-rank'>{member.rank}</h5>
                <p className='squadron-description'>{member.description}</p>
            <div className='flight-card-buttons'>
                <button 
                    onClick={() => removeMember(member.id)} 
                    className='btn-delete-flight-btn'
                >Delete</button>

                <button 
                    onClick={() => findMember(member.id)}   
                    className='btn-edit-flight-btn'
                >Edit</button>
            </div>
        </div>
    )
}

export default Member
