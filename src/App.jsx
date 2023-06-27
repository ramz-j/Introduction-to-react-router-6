import './App.css'
import { Routes, Route, Link, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './components/Layout'
import Vans from './pages/Vans'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='vans' element={<Vans />} />
  </Route>
))



function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
