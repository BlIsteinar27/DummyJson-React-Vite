import React, { useEffect, useState } from 'react'
const API = 'https://dummyjson.com/products';

const Tienda = () => {

  const [datos, setDatos] = useState([])
  const getDatos = async () =>{
      try {
        const response = await fetch(API);
        const data = await response.json();
        //console.log(data)
        setDatos(data.products);
      } catch (error) {
        console.error(error)
      }
    };
    useEffect(()=>{
      getDatos();
    },[]);

  return (
    <>
        <h3 className='text-center py-3'>Tienda</h3>
        
    </>
  )
}

export default Tienda