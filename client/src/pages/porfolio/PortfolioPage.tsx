import React, { useState } from 'react'
import Portfolio from '../../components/portolio/Portfolio'
import { useSelector } from 'react-redux'
const PortfolioPage = ()=>{
   const projects = useSelector((state:any)=> state.projects)
   

 
 return <>{projects.map((project: { id: any })=>{
    return <Portfolio key = {project.id} project={project}/>
 })}</>
}
export default PortfolioPage