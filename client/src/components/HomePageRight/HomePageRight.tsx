import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './HomePageRight.css'

const HomePageRight =({handleNav}:any)=>{
    return<>
   
    <div className='right-wrapper'> 
    < FontAwesomeIcon className='nav-button' onClick={handleNav} icon={faBars}/>
    <div className='right-div'>right</div></div>
    </>;
}
export default HomePageRight;