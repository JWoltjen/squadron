import React, {useContext} from 'react'
import {SquadronListContext} from '../contexts/SquadronListContext'

function Member({member}) {
    const {removeMember, findMember} = useContext(SquadronListContext)
    return (
       <div className='squadron-member-card'>
                <h1 className='squadron-member-name'>{member.name}</h1>
                <h5 className='squadron-member-nationality'>{member.nationality}</h5>
                <h5 className='squadron-rank'>{member.rank}</h5>
                <p className='squadron-description'>{member.description}</p>
            {/* <ul className='flight-stats'>
                <li>Kills: {flight.kills}</li>
                <li>Wingmen: {flight.wingmen}</li>
                <li>Losses: {flight.losses}</li>
            </ul> */}
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
