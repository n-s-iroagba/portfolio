import React from 'react'
import Portfolio from '../../components/portolio/Portfolio'
const PortfolioPage = ()=>{
   
 const projects =[ {id:1,title:'my first project',github:"https://github.com/n-s-iroagba/takum",writeUp:'blah blah blah',link:"https://www.xnxx.com"}]
 return <>{projects.map(project=>{
    return <Portfolio key = {project.id} project={project}/>
 })}</>
}
export default PortfolioPage