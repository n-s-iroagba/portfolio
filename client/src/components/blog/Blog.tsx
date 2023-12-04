import React from 'react'
import { Card, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import BlogPost from './BlogPost'

const Blog = () => {
    const blogPosts = useSelector((state: any) => state.blog)

    return <>
        <div>
            <Row xs={1} md={3} >
                {
                    blogPosts.map((post: any) => { return <><BlogPost key={post.id} post={post} /></> })
                }
            </Row>
        </div>
    </>
}
export default Blog;