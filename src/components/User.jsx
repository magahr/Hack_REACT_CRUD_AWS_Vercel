import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

// Asegúrate de que la URL está correctamente configurada en el archivo .env
const apiUrl = process.env.REACT_APP_API_URL;

const User = () => {
  const [usersBack, setUsersBack] = useState([]);  // Almacena los datos de los usuarios
  const [loading, setLoading] = useState(false);   // Estado para controlar la carga de datos
  const [error, setError] = useState(null);        // Estado para manejar errores

  useEffect(() => {
    const fetchUser = async () => {
        setLoading(true);

        try {
            const usuarios = await axios.get(`${apiUrl}/formularios`);
            console.log("Respuesta del backend:", usuarios);
            
            // Asegúrate de que 'usuarios.data' sea un array
            const data = Array.isArray(usuarios.data) ? usuarios.data : [usuarios.data];
            
            setUsersBack(data);  // Usa el array de usuarios
            
        } catch (error) {
            setError('Ocurrió un error al obtener los datos');
            console.error("Error al obtener los datos:", error);
        } finally {
            setLoading(false);
        }
    };

    fetchUser();
}, []);


  // Función para manejar la eliminación de un usuario
  const handleDelete = async (user) => {
    if (window.confirm('¿Quieres eliminar este usuario?')) {
      try {
        const response = await axios.delete(`${apiUrl}/delete-formulario/${user.id}`);
        if (response.status === 200) {
          setUsersBack(usersBack.filter(u => u.id !== user.id));  // Elimina el usuario del estado
          alert('Usuario eliminado correctamente');
        } else {
          console.error('Error al eliminar el usuario:', response.data);
          alert('Error al eliminar el usuario. Por favor, inténtalo de nuevo más tarde.');
        }
      } catch (error) {
        console.error('Error al eliminar el usuario:', error);
        alert('Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul>
      {usersBack.length > 0 ? (
        usersBack.map(user => (
          <div key={user.id}>
            {user.id} {user.nombre} - {user.email} - {user.edad}
            <Link to={`/form/${user.id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => handleDelete(user)}>Eliminar</button>
          </div>
        ))
      ) : (
        <div>No se encontraron usuarios.</div>
      )}
    </ul>
  );
};

export default User;
