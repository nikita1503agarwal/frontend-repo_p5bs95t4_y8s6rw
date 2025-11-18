import React from 'react'
import Home from './Home'
import Servicii from './Servicii'
import Solutii from './Solutii'
import Cariere from './Cariere'
import Contact from './Contact'
import NotFound from './NotFound'

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/servicii', element: <Servicii /> },
  { path: '/solutii', element: <Solutii /> },
  { path: '/cariere', element: <Cariere /> },
  { path: '/contact', element: <Contact /> },
  { path: '*', element: <NotFound /> },
]
