import React, { useState } from 'react'
import Navbar from './pages/Navbar'
import BigCard from './components/BigCard'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'
import Rooms from './pages/Rooms'
import Cart from './pages/Cart'
import { CartProvider } from './CartContext';
import FooterComp from './components/FooterComp'
import Payment from './pages/Payment'
import AboutComp from './components/AboutComp'
import ContactPage from './pages/ContactPage'
import SearchBarpage1 from './pages/SearchBarpage1'
import Roompage from './pages/Roompage'
const App = () => {
  // const [show, setShow] = useState();
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<> <Navbar size={cart.length} /><BigCard /><HomePage /></>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/room" element={<Rooms />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/footer" element={<FooterComp />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/about" element={<AboutComp />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/5star" element={<SearchBarpage1/>}/>
            <Route path="/rooms" element={<Roompage/>}/>
          </Routes>
        </Router>
      </CartProvider>
    </>
  )
}

export default App