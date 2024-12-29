import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './Home';
import Form from './Form';

const App2 = () => {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom box-shadow py-3 mb-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">Actualización con BD</Link>
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
                </div>
            </nav>

            <Routes>
                {/* Ruta para la página principal */}
                <Route path="/" element={<Navigate to="/home" />} />
                
                {/* Ruta para Home */}
                <Route path="/home" element={<Home />} />
                
                {/* Ruta para el formulario */}
                <Route path="/form" element={<Form />} />
                <Route path="/form/:formularioId" element={<Form />} />
                
                {/* Ruta para manejar errores */}
                <Route path="*" element={<div>Página no encontrada</div>} />
            </Routes>
        </Router>
    );
};

export default App2;
