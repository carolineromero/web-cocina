import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import RecipeDetail from '../pages/RecipeDetail'


function Router() {
  
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/receta/:id' element={<RecipeDetail />} />

           
            
        </Routes>
    </BrowserRouter>
  )
}

export default Router 