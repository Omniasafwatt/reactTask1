import React from 'react'
import Contact from './components/body/Contact'
import{RouterProvider , createBrowserRouter}from "react-router-dom"
import Userlayout from './Layouts/Userlayout'
import About from './components/body/About'
import Portfolio from './components/body/Portfolio'
import Home from './components/body/Home'




export default function App() {


    let routes = createBrowserRouter([
        { path: '/', element:<Userlayout/>,children: [
            {index: true, element:<Home/>},
            {path: 'about', element:<About/>},
            {path: 'portfolio', element:<Portfolio/>},
            {path: 'contact', element:<Contact/>},

        ]},
    ])

  return (
    <>
    <RouterProvider router={routes}/>

    </>
  )
}