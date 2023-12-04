import React from 'react'
import './RightNavbar.css'

const RightNavbar = () => {
    return (<>
        <div className="navlist-wrapper">
            <ul className="navlist">
                <li >
                    <a href="/">About </a>
                </li>
                <br/>
                
                <li className="">
                    <a href="/portfolio">Portfolio</a>
                </li>
                <br/>
               
                <li className="">
                    <a href="/blog">Blog Posts</a>
                </li>
            </ul>
        </div>
    </>

    )
}
export default RightNavbar;