import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Shop from '../components/Shop'
import Cart from '../components/Cart'
const Routing = () => {
  return (
    <div>
        <Routes>
             <Route path='/' element={<Home/>}/> 
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default Routing