import React from 'react'
import {Carousel} from '3d-react-carousal'
import BigIron from '../images/BigIron.png'
import bigiron1 from '../images/bigiron1.png'
import bigiron2 from '../images/bigiron2.png'
import bigiron3 from '../images/bigiron3.png'
import bigiron4 from '../images/bigiron4.png'
import bigiron5 from '../images/bigiron5.webp'
import bigiron6 from '../images/bigiron6.png'
import GunfightersV from '../images/GunfightersV.png'
function PhotoGallery() {
    let slides = [
                <img src={BigIron}/>,
                <img src={bigiron1}/>,
                <img src={bigiron2}/>,
                <img src={bigiron3}/>,
                <img src={bigiron4}/>,
                <img src={bigiron5}/>,
                <img src={bigiron6}/>,
                <img src={GunfightersV}/>,  
            ]
    return (
        <div className='home-container'>
            <h1 className='home-title'> Photo Gallery</h1>
        <Carousel slides={slides} autoplay={false} interval={5000}/>          
        </div>
    )
}

export default PhotoGallery
