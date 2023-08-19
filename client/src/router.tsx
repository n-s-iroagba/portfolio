import React from 'react'
import Home from './components/home/Home'
import {createBrowserRouter} from "react-router-dom"
import HomePageRight from './components/HomePageRight/HomePageRight'
import HomePageLeft from './components/homePageLeft/HomePageLeft'
import RightNavbar from './components/navbar/RightNavbar'
import LeftNavbar from './components/navbar/LeftNavbar'
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
])
