import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import OrderPalce from './pages/OrderPlace/OrderPalce'
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'


function App() {

const [showLogin, setshowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin} />:<></>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin} />
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/Cart' element={<Cart/>}  />
        <Route path='/OrderPlace' element={<OrderPalce/>}  />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
