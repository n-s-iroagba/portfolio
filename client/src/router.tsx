import React from 'react'
import Home from './pages/home/Home'
import {createBrowserRouter} from "react-router-dom"
import HomePageRight from './components/HomePageRight/HomePageRight'
import HomePageLeft from './components/homePageLeft/HomePageLeft'
import RightNavbar from './components/navRight/RightNavbar'
import LeftNavbar from './components/navLeft/LeftNavbar'
import Portfolio from './components/portolio/Portfolio'
import PortfolioPage from './pages/porfolio/PortfolioPage'
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
}
])
