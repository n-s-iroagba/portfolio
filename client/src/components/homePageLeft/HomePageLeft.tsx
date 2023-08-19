import React, { useState } from 'react'
//import afms1 from "../home/Assets/images/afms1.jpg"
import homepic from "../home/Assets/images/afms2.jpg"
import './HomePageLeft.css'
import { Carousel } from 'react-bootstrap'

const HomePageLeft=()=>{
return(
    <img className='home-image' src={homepic} alt="a photo of iroagba nnamdi solomon" />
    )

}
export default HomePageLeft