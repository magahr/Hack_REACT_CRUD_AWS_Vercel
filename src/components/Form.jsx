import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormularioForm from './FormularioForm';
import {useParams, useNavigate} from 'react-router-dom'



const Form = () => {
    const { formularioId } = useParams();
    const [ formulario, setFormulario] = useState(null);
    const navigate = useNavigate();

    useEffect ( () => {
        if (formularioId) {
            // obtener ese usuario por su id si existe
            axios.get(`http://18.222.0.186:5000/formularios/${formularioId}`)
            .then(response => setFormulario(response.data))
            .catch(error => console.error('Error al obtener usuario', error))
        }
    }, [formularioId]);
    const handleSubmit = (values) => {
        //esta es la ruta que esta en el endpoint en el flask
        if (formulario) {
            axios.patch(`http://18.222.0.186:5000/patch-formulario/${formularioId}`, values) 
            .then(() => {
                //actualizar el usuario
                alert('Usuario actualizado correctamente');
                navigate('/home')
            })
            .catch(error => console.error('Error al actualizar el usuario  ') )
        }
        else{
            //crear el usuario
            axios.post(`http://18.222.0.186:5000/create-formulario`, values)
            .then(() => {
                alert('Usuario creado correctamente');
                navigate('/home')
            })
            .catch(error => console.error('Error al crear el usuario  ', error) )
        }

        
    }
    return (
       <div>
            {formulario ? (  
                <div>
                    <FormularioForm formulario={formulario} onSubmit={handleSubmit}/>
                </div>
            ) : (
                <FormularioForm formulario={formulario} onSubmit={handleSubmit}/>
            )}
       </div>
    )
}

export default Form;

/* 
    <h3>{ formulario ? 'Actualizar usuario ' : ' Crear usuario'}</h3>
*/