import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <footer className="footer py-3">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link to="/inicio" href="#" className="nav-link px-2 text-body-secondary">Inicio</Link></li>
                    <li className="nav-item"><Link to="/tienda" href="#" className="nav-link px-2 text-body-secondary">Tienda</Link></li>
                    <li className="nav-item"><Link to="/contactos" href="#" className="nav-link px-2 text-body-secondary">Contactos</Link></li>     
                </ul>
                <p className="text-center text-body-secondary">Jose Roman ||© 2024 Company, Inc</p>
            </footer>
        </>
    )
}

export default Footer