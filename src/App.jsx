
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import Tienda from './pages/Tienda'
import Contactos from './pages/Contactos'
import Categorias from './pages/Categorias'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/contactos" element={<Contactos />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
