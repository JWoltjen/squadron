import React, {useContext} from 'react'
import {SquadronListContext} from '../contexts/SquadronContext'

function Member({member}) {
    const {removeMember, findMember} = useContext(SquadronListContext)
    return (
       <div className='squadron-member-card'>
           <div className='wrapper'>
                <h1 className='squadron-member-name'>{member.name}</h1>
                <img className='member-form-image' src={member.image}/>
            </div>
            <div className='wrapper'>
                <div className='member-description-container'>
                    <h5 className='squadron-member-nationality'>Nationality: {member.nationality}</h5>
                    <h5 className='squadron-rank'>Rank: {member.rank}</h5>
                    <ul className='member-stats'>
                        <li>Eyesight: {member.eyesight}</li>
                        <li>Awareness: {member.awareness}</li>
                        <li>Aggression: {member.aggression}</li>
                        <li>Communication: {member.communication}</li>
                        <li>Gunnery: {member.gunnery}</li>
                    </ul>
                    <p className='squadron-description'>{member.description}</p>
                </div>
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
        </div>
    )
}

export default Member
