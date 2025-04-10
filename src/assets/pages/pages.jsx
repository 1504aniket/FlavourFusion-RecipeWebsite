import React from 'react'
import Home from './home'
import { Route,Routes } from 'react-router-dom'
import CuisineRecipes from '../../components/CuisineRecipes'
import Navbar from '../../components/navbar'
import About from '../../components/about'
import RecipeDetails from '../../components/recipedetails'
import SearchCuisine from '../../components/searchcuisine'
import Footer from '../../components/footer'

const pages = () => {
  return (
    <div>
      <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/cuisine/:id' element={<div><CuisineRecipes/><Footer/></div>}/>

     <Route path='/aboutus' element={<div><About/><Footer/></div>}/>
     
     <Route path='/cuisine/details/:id' element={<div><RecipeDetails/><Footer/></div>}/>
     <Route path='/search/:id' element={<div><SearchCuisine/><Footer/></div>}/>

      </Routes>
        
      
    </div>
  )
}

export default pages
