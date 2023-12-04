import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { viewNav } from '../../state-mangement/slice/homeOrNavSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './NavButton.css'
const NavButton = ()=>{
    const dispatch =  useDispatch()
    return<>
    < FontAwesomeIcon className='nav-button' onClick={() => { dispatch(viewNav()) }} icon={faBars} />
    </>
}
export default NavButton;