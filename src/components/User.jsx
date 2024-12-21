// esto es de gemini
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link } from 'react-router-dom';

export function User() {
  //const [users, setUsers] = useState([]);
  const [usersBack, setUsersBack] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

    useEffect(() => {
            const fetchUser = async () => {
            try {
                //const response = await axios.get("https://jsonplaceholder.typicode.com/users");   
                const usuarios = await axios.get("http://18.222.0.186:5000/formularios");   
                console.log(`Usuarios de mi Backend`, usuarios)
                //setUsers(response.data);
                setUsersBack(usuarios.data);
            } catch (error) {
                // Manejo de errores (aquí puedes personalizar los mensajes de error)
                setError('Ocurrió un error al obtener los datos');
            } finally {
                setLoading(false);
            }
            };

            fetchUser();
        }, []); // Arreglo de dependencias vacío: se ejecuta una vez

        const handleDelete = async (user) => {
          if (window.confirm('¿Quieres eliminar este usuario?')) {
              try {
                  const response = await axios.delete(`http://18.222.0.186:5000/delete-formulario/${user.id}`);
                  if (response.status === 200) {
                      setUsersBack(usersBack.filter(u => u.id !== user.id));
                      // Mostrar notificación de éxito
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


  if (loading) return <div>Cargando...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <ul>
       {/*users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))*/}
      {usersBack.map(user => (
        <div key={user.id}>
             {user.id} {user.nombre} - {user.email} - {user.edad}
            <Link to={`/form/${user.id}`}>
            <button> Editar </button>
            </Link>
            <button onClick={() =>  handleDelete(user)}>Eliminar</button>
        </div>
      ))}
    </ul>
  );
}

/*
http://18.222.0.186:5000/delete-formulario/4

const response = await axios.delete(`http://18.222.0.186:5000/delete-formulario/?id=${user.id}`);

 <button onClick={() =>  handleDelete(user)}>Eliminar</button>
 return (
    <ul>
       {/*users.map(user => (
        <li key={user.id}>{user.name} - {user.email}</li>
      ))}
      {usersBack.map(user => (
        <li key={user.id}>
            {user.nombre} - {user.email} - {user.edad}
            <Link to={`/form/${user.id}`}>
            <button> Editar </button>
            </Link>
            <button onClick={() =>  handleDelete(user)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

*/
