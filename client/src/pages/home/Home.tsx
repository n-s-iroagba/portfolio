import React, { useState, MouseEventHandler, Fragment } from 'react'

import RightNavbar from '../../components/navRight/RightNavbar';
import HomePageRight from '../../components/HomePageRight/HomePageRight';
import HomePageLeft from '../../components/homePageLeft/HomePageLeft';
import LeftNavbar from '../../components/navLeft/LeftNavbar';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Home.css'
export interface MyProps {
    showNav: () => void | MouseEventHandler<HTMLDivElement>
}
const Home = () => {

    const [showNavBar, setShowNavBar] =useState({navbar:'initial-render',homePage:'fade-in'})
    
    
    const handleNav = () => {
        
        setShowNavBar({...showNavBar,navbar:'fade-in',homePage:'fade-out'})
        console.log(showNavBar)
   
    }
    const handleHomeChange =()=>{
        setShowNavBar({...showNavBar,navbar:'fade-out',homePage:'fade-in'})
    } 
    return <>
    <div className='home'>
        <div className={showNavBar.homePage}>
            <div className='a'>
                <div className="container">
                    <div className="left"><HomePageLeft /></div>
                    <div className='right'><HomePageRight handleNav={handleNav} /></div>
                </div>
            </div>
        </div>
        <div className={showNavBar.navbar}>
            <div className='b'>
                <div className="nav-container">
                    <div className="left">< LeftNavbar handleHomeChange={handleHomeChange}/></div>
                    <div className='right'><RightNavbar /></div>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default Home;