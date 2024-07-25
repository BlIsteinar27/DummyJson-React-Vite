import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // Importar el tema // Cambia el tema según tu preferencia
import "primereact/resources/primereact.min.css";// Importar estilos principales
import "primeicons/primeicons.css";// Importar los iconos de Prime
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
