import React from 'react'
import { viewHome, viewNav } from '../../state-mangement/slice/homeOrNavSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux'
import { faWindowClose } from '@fortawesome/free-regular-svg-icons'
import './NavButton.css'

const HomeButton = ()=>{
    const dispatch =  useDispatch()
    
    return <>
        
            <FontAwesomeIcon className='nav-button' onClick={() => dispatch(viewHome())} icon={faWindowClose}/>
        
        </>
}
export default HomeButton;