import React from 'react'
import logo1 from '../assets/logoHero1.png'
import logo2 from '../assets/logoHero2.png'
import logo3 from '../assets/logo.jpg'
import hero1 from '../assets/hero1.jpg'
import hero2 from '../assets/hero2.jpg'
import hero3 from '../assets/hero3.jpg'
import hero4 from '../assets/hero4.jpg'
import hero5 from '../assets/hero5.jpg'
import hero6 from '../assets/hero6.jpg'

const HeroInicio = () => {
    return (
        <>
            <div className="px-4 py-3 my-3 text-center">
                <img className="d-block mx-auto mb-4" src={logo1} alt width={200} height={100} />
                <h1 className="display-5 fw-bold text-body-emphasis">React</h1><br />
                <div className="col-lg-6 mx-auto">
                    <h5><b>La biblioteca de JavaScript más popular para el desarrollo de aplicaciones web.</b></h5><br />
                    <p className="lead mb-4">React.js es una poderosa biblioteca de JavaScript desarrollada por Facebook que te permite crear interfaces de usuario interactivas y eficientes. Con su enfoque basado en componentes, React facilita la construcción de aplicaciones escalables y mantenibles, permitiéndote dividir tu UI en piezas reutilizables y modulares.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href='https://es.react.dev/' target='__blank' className="btn btn-outline-info btn-lg px-4 gap-3" >Pagina Oficial</a>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={hero1} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">¿Por qué elegir React?</h2>
                        <p className="">
                            - Rendimiento Superior: Gracias a su Virtual DOM, React optimiza la actualización de la interfaz, ofreciendo una experiencia de usuario fluida y rápida. <br />
                            <br />
                            - Ecosistema Rico: Con una amplia variedad de bibliotecas y herramientas complementarias, como Redux y React Router, puedes expandir fácilmente las capacidades de tu aplicación. <br />
                            <br />
                            - Comunidad Activa: Únete a una comunidad global de desarrolladores que comparten recursos, tutoriales y soporte, facilitando el aprendizaje y la resolución de problemas. <br />
                            <br />
                            - Desarrollo Declarativo: Crea interfaces intuitivas y predecibles utilizando un enfoque declarativo que simplifica el proceso de desarrollo.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h2 className="display-4 fw-bold text-body-emphasis">¡Empieza a crear hoy mismo!</h2>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Ya sea que estés construyendo una aplicación sencilla o un sistema complejo, React.js te ofrece la flexibilidad y el rendimiento que necesitas. ¡Explora las posibilidades y lleva tus proyectos al siguiente nivel! Este texto destaca las características clave de React.js y su valor para los desarrolladores, lo que puede atraer a nuevos usuarios y motivar a otros a explorar más sobre esta popular biblioteca.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a href='https://es.react.dev/' target='__blank' className="btn btn-outline-info btn-lg px-4 me-sm-3">Pagina Oficial</a>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                    <div className="container px-5">
                        <img src={hero2} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
            
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={logo2} alt width={72} height={57} />
                <h1 className="display-5 fw-bold text-body-emphasis">Vite.js</h1>
                <div className="col-lg-6 mx-auto">
                    <h5><b>La herramienta de construcción moderna para el desarrollo de front-end.</b></h5>
                    <p className="lead mb-4">Vite.js es un potente y ligero bundler de aplicaciones que transforma la forma en que desarrollas proyectos web. Con su enfoque innovador, Vite ofrece un entorno de desarrollo increíblemente rápido y optimizado, permitiéndote concentrarte en lo que realmente importa: construir experiencias excepcionales para tus usuarios.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href='https://vitejs.dev/' target='__blank' className="btn btn-outline-warning btn-lg px-4 gap-3">Pagina Oficial</a>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={hero3} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">¿Por qué elegir Vite?</h2>
                        <p className="">
                            - Velocidad Inigualable: Vite utiliza un servidor de desarrollo basado en módulos ES, lo que significa que puedes ver los cambios en tiempo real sin esperar largos tiempos de compilación. ¡Desarrolla más rápido que nunca! <br />
                            <br />
                            - Configuración Sencilla: Con una configuración mínima y una experiencia lista para usar, Vite te permite comenzar rápidamente sin complicaciones. Ideal tanto para proyectos pequeños como grandes.<br />
                            <br />
                            - Soporte para Múltiples Frameworks: Ya sea que estés trabajando con React, Vue, Svelte o cualquier otro framework, Vite se adapta a tus necesidades y te ofrece un rendimiento excepcional.<br />
                            <br />
                            - Optimización Automática: Vite se encarga de la optimización de tu aplicación para producción, asegurando que tu código esté siempre listo para ser desplegado con el mejor rendimiento.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h2 className="display-4 fw-bold text-body-emphasis">¡Lleva tu Desarrollo al Siguiente Nivel!</h2>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Con Vite.js, experimentarás un flujo de trabajo más ágil y eficiente que transformará tu forma de desarrollar aplicaciones web. ¡Únete a la revolución del desarrollo y descubre lo que Vite puede hacer por ti! Este texto resalta las características y beneficios de Vite.js, atrayendo a desarrolladores que buscan una herramienta moderna y eficiente para mejorar su flujo de trabajo.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a href='https://es.react.dev/' target='__blank' className="btn btn-outline-warning btn-lg px-4 me-sm-3">Pagina Oficial</a>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                    <div className="container px-5">
                        <img src={hero4} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
            
            <div className="px-4 py-5 my-5 text-center">
                <img className="d-block mx-auto mb-4" src={logo3} alt width={72} height={57} />
                <h1 className="display-5 fw-bold text-body-emphasis">Dummy JSON</h1>
                <div className="col-lg-6 mx-auto">
                    <h5><b>La solución perfecta para tus necesidades de desarrollo y pruebas.</b></h5>
                    <p className="lead mb-4">Dummy JSON es una herramienta poderosa y fácil de usar que te permite generar datos de prueba realistas en formato JSON. Ideal para desarrolladores y diseñadores, Dummy JSON te ayuda a simular respuestas de API y a poblar tus aplicaciones con datos ficticios, facilitando el proceso de desarrollo y pruebas.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <a href='https://dummyjson.com/' target='__blank' className="btn btn-outline-secondary btn-lg px-4 gap-3">Pagina Oficial</a>

                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={hero5} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h2 className="display-5 fw-bold text-body-emphasis lh-2 mb-3">¿Por qué elegir Dummy JSON?</h2>
                        <p className="">
                           - Simplicidad y Rapidez: Con una interfaz intuitiva y fácil de usar, puedes crear datos de prueba en cuestión de segundos. Ahorra tiempo y esfuerzo en la creación manual de datos. <br />
                           <br />
                           - Flexibilidad: Personaliza la estructura de tus datos según tus necesidades. Dummy JSON te permite generar desde simples listas hasta complejas jerarquías de datos.<br />
                           <br />
                           - Soporte para Múltiples Tipos de Datos: Genera datos de diferentes tipos, como texto, números, fechas y más. Dummy JSON se adapta a cualquier escenario de prueba que necesites.<br />
                           <br />
                           - Ideal para Prototipos y Pruebas: Utiliza Dummy JSON para crear prototipos rápidos y realizar pruebas sin depender de una API real. Mejora tu flujo de trabajo y acelera el desarrollo de tus aplicaciones.
                        </p>
                    </div>
                </div>
            </div>
            <div className="px-4 pt-5 my-5 text-center border-bottom">
                <h2 className="display-4 fw-bold text-body-emphasis">¡Comienza a Crear Datos de Prueba Hoy Mismo!</h2>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">Con Dummy JSON, tendrás la libertad de enfocarte en lo que realmente importa: construir y probar tus aplicaciones sin las limitaciones de datos reales. ¡Descubre la simplicidad y eficacia de generar datos de prueba con Dummy JSON! Este texto destaca las características y beneficios de Dummy JSON, atrayendo a desarrolladores que buscan una solución eficiente para generar datos de prueba en sus proyectos.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <a href='https://dummyjson.com/' target='__blank' className="btn btn-outline-secondary btn-lg px-4 me-sm-3">Pagina Oficial</a>
                    </div>
                </div>
                <div className="overflow-hidden" style={{ maxHeight: '30vh' }}>
                    <div className="container px-5">
                        <img src={hero6} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width={700} height={500} loading="lazy" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroInicio