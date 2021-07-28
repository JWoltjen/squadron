 import React from 'react'
 import banner from '../images/banner.jpg'

 function Home() {
     return (
 <div className='home-container'>
          <h1 className='home-title'>Welcome to Squadron!</h1>
          <img className='hero-welcome-img' src={banner}/>
          <div className='home-card'>
          <p>Squadron is a single-page application designed to document missions flown by virtual pilots in a number of popular aviation-based games. With Squadron, you can do the following things:
            <ul className='home-list'>
              <li>Make logs of your flights which record date flown, kills, wingmen, and losses. </li>
              <li>Make a squadron roster which documents the pals you fly with, along with their relative skills and biographical description.</li>
              <li>Post images to the photogallery which display your aerial forays for all to see!</li>
            </ul>
          </p>
          </div>
        </div>
     )
 }
 
 export default Home
 
