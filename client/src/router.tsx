import React from 'react'
import Home from './pages/home/Home'
import {createBrowserRouter} from "react-router-dom"
import HomePageRight from './components/left_home/LeftHome'
import HomePageLeft from './components/right_home/RightHome'
import RightNavbar from './components/right_nav/RightNavbar'
import LeftNavbar from './components/left_nav/LeftNavbar'
import Portfolio from './components/portolio/Portfolio'
import PortfolioPage from './pages/porfolio/PortfolioPage'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
export const router = createBrowserRouter([
    {
    path:'/',
    element: <Home/>
},
{
    path:'rightHome',
    element:<HomePageRight/>
},
{
    path:'leftHome',
    element:<HomePageLeft/>
},
{
    path:'leftnav',
    element:<LeftNavbar/>
}
,
{
    path:'portfolio',
    element:<PortfolioPage/>
},
{
    path:'blog',
    element:<Blog/>
},
{
    path:'footer',
    element:<Footer/>
}
])
