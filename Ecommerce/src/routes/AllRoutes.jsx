import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from "../pages/Homepage"
import Contact from "../components/Contact"


function AllRoutes() {

  const { pathname } = useLocation();

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/contactus' element={<Contact/>}/>
    </Routes>
  )
}

export default AllRoutes