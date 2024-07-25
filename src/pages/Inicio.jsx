import React from 'react'
import Carrusel from '../components/Carrusel'
import HeroInicio from '../components/HeroInicio'

const Inicio = () => {
  return (
    <>  
        <Carrusel/>
        <h1 className='text-center py-4'><i>Dummy JSON + React + Vite.js</i></h1>
        <HeroInicio/>
    </>
  )
}

export default Inicio