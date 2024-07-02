import react from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Homescreen from './Screen/HomeScreen/Homescreen.jsx'
import {Routes,Route} from 'react-router-dom'
import Products from './Screen/Products/Products.jsx'
import Footer from './Component/Footer/Footer'
import Cart from './Screen/Cart/Cart'

function App() {

  return (
    <>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homescreen/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
