import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './LeftHome.css'
import { useDispatch } from 'react-redux'

import Footer from '../footer/Footer'
import NavButton from '../nav_button/NavButton'

const LeftHome = ({ handleNav }: any) => {

    return <>
        
            <div className='right-div'>
                <h2>Nnamdi...</h2>
                <p>Hi there!...</p>
                <p> I am Nnamdi Solomon Iroagba.</p>
                <p>...And I am Software Developer.</p>
                <p> I am passionate about creating high-quality software that solves real-world problems.
                    I am also a team player and I enjoy working with others to achieve common goals.</p>
                <p>I'm proficient in a variety of programming languages and technologies, including Python(flask), Java(spring boot), JavaScript(React,Express and Node.js)</p>                
                <p>I love to see ideas become reality through efficient and clean code.</p>
            </div>
      
        
    </>;
}
export default LeftHome;