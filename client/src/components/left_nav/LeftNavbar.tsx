import React from 'react'
import './LeftNavbar.css'
import { useDispatch } from 'react-redux'
import { viewHome } from '../../state-mangement/slice/homeOrNavSlice'
import Footer from '../footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

const LeftNavbar = ({handleHomeChange}:any)=>{
    const dispatch = useDispatch()
    return <>
        <div className='leftnav-top'>
            <div className='gohome-button' onClick={() => dispatch(viewHome())}><FontAwesomeIcon icon={faWindowClose}/></div>
        </div>
        </>
}
export default LeftNavbar;