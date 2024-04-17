
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'



function App() {
  

  return (
    <>
    <Header/>

    <Routes>
      
      <Route path="/" element={<Home/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    <Footer/>

    </>
  )
}

export default App
