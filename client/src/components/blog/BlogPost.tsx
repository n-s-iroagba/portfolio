import React from 'react'
import { Card } from 'react-bootstrap'
import './blog.css'
const BlogPost = ({post}:any)=>{

    return(
    <div className='blog-wrapper'>
    <Card>
        <Card.Body><a href={post.link} target='_blank'>{post.title}</a></Card.Body>
    </Card>
    </div>)
}
export default BlogPost;