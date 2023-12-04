import React from 'react'
import './Description.css'
const Description = ({project}:any)=>{
    
return(<>
    <div className='description-wrapper'>
        <div className='functionality-desc'>{project.writeUp}</div>
        <div className='stack-desc'>{project.stackDescription}</div>
    </div>

</>)
}
export default Description;