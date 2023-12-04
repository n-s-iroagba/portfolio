import React from 'react'

import RightNavbar from '../../components/right_nav/RightNavbar';
import HomePageRight from '../../components/left_home/LeftHome';
import HomePageLeft from '../../components/right_home/RightHome';
import LeftNavbar from '../../components/left_nav/LeftNavbar';
import './Home.css'
import { useSelector } from 'react-redux';
import Footer from '../../components/footer/Footer';
import NavButton from '../../components/nav_button/NavButton';
import LeftHome from '../../components/left_home/LeftHome';
import RightHome from '../../components/right_home/RightHome';
import HomeButton from '../../components/nav_button/HomeButton';

const Home = () => {
    const homeState = useSelector((state: any) => state.homeOrNav)

    return <>
        <div className='c'>
            <div className={homeState.home}>
                <div className="nav-button">{homeState.home == 'fade-in' ? <NavButton /> : < HomeButton />}</div>
                <div>
                    <div className="container">
                        <div className="left"><LeftHome /></div>
                        <div className='right'><RightHome /></div>

                    </div>

                </div>
            </div>

            <div className={homeState.navbar}>
                <div className="nav-button">{homeState.home == 'fade-in' ? <NavButton /> : < HomeButton />}</div>
                <div className='nav'><RightNavbar /></div>

            </div>
            <div className='foote'><Footer /></div>
        </div>

    </>
}

export default Home;