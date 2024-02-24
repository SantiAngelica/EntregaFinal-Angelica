import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import FilterList from './components/FilterList'
import ItemDetailContainer from './components/ItemDetailContainer'
import { CartContext, CartProvider } from './context/CartContext'
import Cart from './components/Cart'
import Formulario from './components/Formulario'

function App() {
  const [count, setCount] = useState(0)

  return (

    <CartProvider>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:marca" element={<FilterList />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/formulario' element={<Formulario />} />
        </Routes>


      </BrowserRouter>
    </CartProvider>

  )
}

export default App
