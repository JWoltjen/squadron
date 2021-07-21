import React from 'react'
import BigIron from '../images/BigIron.png'
import bigiron1 from '../images/bigiron1.png'
import bigiron2 from '../images/bigiron2.png'
import bigiron3 from '../images/bigiron3.png'
import bigiron4 from '../images/bigiron4.png'

function PhotoGallery() {
    return (
        <div>
            <img src={BigIron}/>
            <img src={bigiron1}/>
            <img src={bigiron2}/>
            <img src={bigiron3}/>
            <img src={bigiron4}/>
        </div>
    )
}

export default PhotoGallery
