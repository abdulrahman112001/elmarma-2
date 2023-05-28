import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from './Home'
import News from './News'
import Matches from './Matches'

export const  AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} errorElement="error" >
            <Route index element={<News/>}/>
            <Route path="/matches" element={<Matches/>} />

        </Route>

    </Routes>
   
  )
}

