import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Servicii from './pages/Servicii'
import Solutii from './pages/Solutii'
import Cariere from './pages/Cariere'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Test from './Test'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicii" element={<Servicii />} />
        <Route path="/solutii" element={<Solutii />} />
        <Route path="/cariere" element={<Cariere />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
