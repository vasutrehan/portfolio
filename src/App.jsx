
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>

        <Route path='*' element={<Notfound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
