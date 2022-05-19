import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import "./App.css"
import Exercise1 from './components/exercise1/Exercise1'
import Exercise2 from './components/exercise2/Exercise2'
import Exercise3 from './components/exercise3/Exercise3'
import Exercise4 from './components/exercise4/Exercise4'
import Exercise5 from './components/exercise5/Exercise5'
import Exercise6 from './components/exercise6/Exercise6'
import Exercise7 from './components/exercise7/Exercise7'
import Exercise8 from './components/exercise8/Exercise8'
import Exercise9 from './components/exercise9/Exercise9'

export default function Main() {
  return (
    <BrowserRouter>
      <div className='home-section'>
        <h1>9 Simple React JS Coding Exercises </h1>
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Exercise1">Exercise1</NavLink></li>
            <li><NavLink to="/Exercise2">Exercise2</NavLink></li>
            <li><NavLink to="/Exercise3">Exercise3</NavLink></li>
            <li><NavLink to="/Exercise4">Exercise4</NavLink></li>
            <li><NavLink to="/Exercise5">Exercise5</NavLink></li>
            <li><NavLink to="/Exercise6">Exercise6</NavLink></li>
            <li><NavLink to="/Exercise7">Exercise7</NavLink></li>
            <li><NavLink to="/Exercise8">Exercise8</NavLink></li>
            <li><NavLink to="/Exercise9">Exercise9</NavLink></li> 
        </ul>
              <Routes>
                  <Route exact path='/' element={<Home/>} />
                  <Route path='/Exercise1' element={<Exercise1/>} />    
                  <Route path='/Exercise2' element={<Exercise2/>} />    
                  <Route path='/Exercise3' element={<Exercise3/>} />    
                  <Route path='/Exercise4' element={<Exercise4/>} />  
                  <Route path='/Exercise5' element={<Exercise5/>} />  
                  <Route path='/Exercise6' element={<Exercise6/>} />  
                  <Route path='/Exercise7' element={<Exercise7/>} />       
                  <Route path='/Exercise8' element={<Exercise8/>} />       
                  <Route path='/Exercise9' element={<Exercise9/>} />       
              </Routes>
      </div>
    </BrowserRouter>
  )
}