import React, { useState } from 'react'
import './Portfolio.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import Description from './Description'
import ProjectImage from './ProjectImage'
const Portfolio = ({project} : any) => {
    const [projectDescription, setProjectDescription] = useState('initial-state')
    const [rotate, setRotate] = useState(' ')
    const show = () => {
        setProjectDescription('show-state')
        setRotate('rotat')
    }
    return (
        <div>
            <div className='title-wrapper'>

                <h4 className='title'>{project.title}</h4>
                <div className='icons'><FontAwesomeIcon className={rotate} onClick={show} icon={faAngleDown} /></div>
                <hr />
                <div className={projectDescription}>
                    <div className='project-description-wrapper'>
                        <div className='a'><Description project={project} /></div>
                        <div className='b'><ProjectImage /></div>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}
export default Portfolio;