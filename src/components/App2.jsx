import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

<div className='collapse navbar-collapse' id='navbarNav'>
<ul className='navbar-nav'>
    <li className='nav-item'>
        <Link className='nav-link' to='/form'>Formulario</Link>
    </li>
</ul>
</div>

const App2 = () => {
   
    return (
       <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">
                <div className="container">   

                    <Link className="navbar-brand" to="/">Actualización con BD</Link>
                    {/* ... resto del código ... */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link text-dark" aria-current="page" to="/">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/form">Creación de Usuarios</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="/home">Consulta y Actualización de Usuarios</Link>
                    </li>
                    </ul>
                    {/* ... resto del código ... */}
                </div>
            </nav>

            <Routes>
                <Route path='/home' element={<Home />} />                 *// Ruta por defecto, muestra Home
                <Route path='/form' element={<Form />} />                 *// Ruta para el formulario
                <Route path='/form/:formularioId' element={<Form/>} />    *// Ruta para el formulario
            </Routes> 
       </Router>
    )
}

export default App2;
/*
 <Link className="nav-link text-dark" aria-current="page" to="/">Home</Link>
{/* <nav className='navbar navbar-expand-lg navbar-light bg-light'>
<div className='container-fluid'>
    <Link className='navbar-brank' to = "/home">Inicio</Link>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navba">
        <span className='"navbar-toggler-icon'></span>
    </button>
    <Link className='navbar-brank' to = "/form">Formulario</Link>
    <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navba">
        <span className='"navbar-toggler-icon'></span>
    </button>
 </div>
</nav> }*/

