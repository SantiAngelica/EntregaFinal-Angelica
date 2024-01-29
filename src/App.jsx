import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import FilterList from './components/FilterList'
import ItemDetailContainer from './components/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/productos/:marca" element={<FilterList />}/>
        <Route path='/item/:id' element={<ItemDetailContainer />}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
