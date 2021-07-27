import React from 'react'
import BigIron from '../images/BigIron.png'

function Home() {
    return (
        <div className='home-container'>
            <h1>Welcome to Squadron!</h1>
            <img className='hero-welcome' src={BigIron}/>
            <p>Squadron is a single-page application you can use to keep track of your flights and teammates from your favorite virtual pilot games.
              It allows players to assign teammates, and even give them customizable ratings! 
            </p>
        </div>
    )
}

export default Home
