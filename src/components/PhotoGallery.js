import React from 'react'
import BigIron from '../images/BigIron.png'
import bigiron1 from '../images/bigiron1.png'
import bigiron2 from '../images/bigiron2.png'
import bigiron3 from '../images/bigiron3.png'
import bigiron4 from '../images/bigiron4.png'
import bigiron5 from '../images/bigiron5.webp'
import bigiron6 from '../images/bigiron6.png'
import GunfightersV from '../images/GunfightersV.png'
function PhotoGallery() {
    return (
        <div className='photo-gallery'>
            <img src={BigIron}/>
            <img src={bigiron1}/>
            <img src={bigiron2}/>
            <img src={bigiron3}/>
            <img src={bigiron4}/>
            <img src={bigiron5}/>
            <img src={bigiron6}/>
            <img src={GunfightersV}/>
        </div>
    )
}

export default PhotoGallery
