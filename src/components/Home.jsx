import React from 'react'
import { User } from './User';

const Home = () => {
    return (
        <div className="container mt-2 text-center">
            <h3>Actualización y Consulta de Usuarios Desde Vercel y con AWS</h3>
            <User/>
        </div>
    )
}

export default Home;