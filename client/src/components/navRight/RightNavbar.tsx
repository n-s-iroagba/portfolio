import React from 'react'
import './RightNavbar.css'

const RightNavbar = () => {
    return(
            <>
            
            <div  className="navlist-wrapper"> 
            <ul className="navlist">
                <li >
                    <a className="" href="#">Home </a>
                </li>
               <li className="">
                    <a className="" href="#">Link</a>
                </li>
               
                <li className="">
                    <a className="nav-lin disabled" href="#">Disabled</a>
                </li>
           </ul>
           </div>    
        </>   
    
)
}
export default RightNavbar;