import React, { useState } from 'react'
//import afms1 from "../home/Assets/images/afms1.jpg"
import homepic from "./afms1.jpg"
import './HomePageLeft.css'
import { Carousel } from 'react-bootstrap'

const HomePageLeft=()=>{
return(
    <div className='image-wrapper'>
    <img className='home-image' src={homepic} alt="a photo of iroagba nnamdi solomon" />
    </div>
    )

}
export default HomePageLeft