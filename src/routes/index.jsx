import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
  )
}