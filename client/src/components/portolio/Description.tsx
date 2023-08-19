import React from 'react'


const Description = ({project}:any)=>{
return(<>
    <div className='description-wrapper'>
        <div className='functionality-desc'>{project.functionalityDescription}</div>
        <div className='stack-desc'>{project.stackDescription}</div>
    </div>

</>)
}
export default Description;