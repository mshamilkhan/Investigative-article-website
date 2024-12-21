import React from 'react'
import Navbar from '../navbar/Navbar';
import DesktopMenu from '../desktopMenu/DesktopMenu';
import Home from '../../pages/Home';
import {createBrowserRouter, Route, RouterProvider, Routes, useLocation} from "react-router-dom"
import {AnimatePresence} from "framer-motion"

export default function AnimatedRoutes() {


    const location = useLocation();
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element:<Home/>
      
//     },
//     {
//       path: "/menuopen",
//       element:<DesktopMenu/>
      
//     }
//   ])
  return (
    // <RouterProvider router={router} /> 
    <AnimatePresence>
    <Routes location={location} key={location.pathname}>
        
        <Route path="/" element={<Home/>} />
        <Route path="/menuopen" element={<DesktopMenu/>} />
    </Routes>  
    </AnimatePresence>
  )
}
