import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Definir el esquema de validación con Yup
const FormSchema = Yup.object().shape({
  nombre: Yup.string().required('El nombre es requerido'),
  edad: Yup.number()
    .required('La edad es requerida')
    .positive('Debe ser un número positivo')
    .integer('Debe ser un número entero'),
  email: Yup.string()
    .required('El correo electrónico es requerido')
    .email('Debe ser un correo electrónico válido'),
});

const FormularioForm = ({ formulario, onSubmit }) => {
  return (
    <Formik
      initialValues={{
        nombre: formulario?.nombre || '',
        edad: formulario?.edad || '',
        email: formulario?.email || '',
      }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false); // Asegúrate de que el estado se actualice después del envío
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="container mt-2 text-center">
            <h3>{formulario ? 'Actualizar Usuario' : 'Crear Usuario'}</h3>
            {/* Campo Nombre */}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field name="nombre" type="text" />
              <ErrorMessage name="nombre" component="div" className="error" />
            </div>
            {/* Campo Edad */}
            <div>
              <label htmlFor="edad">Edad</label>
              <Field name="edad" type="number" />
              <ErrorMessage name="edad" component="div" className="error" />
            </div>
            {/* Campo Email */}
            <div>
              <label htmlFor="email">Correo Electrónico</label>
              <Field name="email" type="text" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            {/* Botón de envío */}
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : formulario ? 'Actualizar Usuario' : 'Crear Usuario'}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormularioForm;
