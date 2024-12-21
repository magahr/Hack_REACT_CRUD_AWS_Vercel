import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  nombre: Yup.string().required('Nombre es requerido'),
  edad: Yup.number().required('Edad es requerida').positive().integer(),
  email: Yup.string().required('Correo es requerida')
})

const FormularioForm = ({ formulario, onSubmit }) => {
  return (
    <Formik
      isSubmitting = {true}
      initialValues={{
        nombre: formulario ? formulario.nombre : '',
        edad: formulario ? formulario.edad : '',
        email: formulario ? formulario.email : '',
      }}
      validationSchema={FormSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container mt-2 text-center">
          <h3>{ formulario ? 'Actualizar usuario ' : ' Crear usuario'}</h3>
            <div>
            
              <label htmlFor="nombre">Nombre</label>
              <Field name="nombre" type="text" />
              <ErrorMessage name="nombre" component="div" />
              <label htmlFor="edad">Edad</label>
              <Field name="edad" type="number" />
              <ErrorMessage name="edad" component="div" />
            </div>
            <div>
              <label htmlFor="email">Correo</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {formulario ? 'Actualizar Usuario' : 'Crear Usuario'}
            </button>
            </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioForm;

/*
    <h3>Creación de Usuarios</h3>
    <h3>{ formulario ? 'Actualizar usuario ' : ' Crear usuario'}</h3>
   <div className="container mt-2 text-center">
            <h3>Actualización y Consulta de Usuarios</h3>
            <User/>
        </div>
        */