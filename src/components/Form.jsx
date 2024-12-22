import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormularioForm from './FormularioForm';
import { useParams, useNavigate } from 'react-router-dom';

const Form = () => {
  const { formularioId } = useParams();
  const [formulario, setFormulario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      if (formularioId) {
        try {
          const response = await axios.get(`http://18.222.0.186:5000/formularios/${formularioId}`);
          setFormulario(response.data);
        } catch (error) {
          console.error('Error fetching formulario:', error);
        }
      }
    };

    fetchData();
  }, [formularioId]);

  const handleSubmit = async (values) => {
    const url = `/formularios/${formularioId || ''}`; // Dynamic URL construction
    const method = formularioId ? 'patch' : 'post';

    try {
      const response = await axios[method](url, values);
      const updateMessage = formularioId ? 'Formulario actualizado' : 'Formulario creado';
      alert(updateMessage);
      navigate('/home');
    } catch (error) {
      const errorMessage = formularioId ? 'Error actualizando formulario' : 'Error creando formulario';
      console.error(errorMessage, error);
    }
  };

  return (
    <div>
      <FormularioForm formulario={formulario} onSubmit={handleSubmit} />
    </div>
  );
};

export default Form;







/*** esto es de gemini tambien  
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FormularioForm from './FormularioForm';
import { useParams, useNavigate } from 'react-router-dom';

const Form = () => {
    const { formularioId } = useParams();
    const [ formulario, setFormulario ] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (formularioId) {
            axios.get(`http://18.222.0.186:5000/formularios/${formularioId}`)
                .then(response => setFormulario(response.data))
                .catch(error => console.error('Error al obtener usuario', error))
        }
    }, [formularioId]);

    const handleSubmit = (values, isUpdate) => {
        const url = isUpdate ? 
            `http://18.222.0.186:5000/patch-formulario/${formularioId}` :
            'http://18.222.0.186:5000/create-formulario';
        const method = isUpdate ? 'patch' : 'post';

        axios[method](url, values)
            .then(() => {
                alert(isUpdate ? 'Usuario actualizado correctamente' : 'Usuario creado correctamente');
                navigate('/home');
            })
            .catch(error => console.error(isUpdate ? 'Error al actualizar el usuario' : 'Error al crear el usuario', error));
    };

    return (
        <div>
            <FormularioForm formulario={formulario} onSubmit={(values) => handleSubmit(values, !!formularioId)} />
        </div>
    );
};

export default Form;

*/


/*
CODIGO SORIGINAL
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


*/