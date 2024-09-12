import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Hook para redirigir
import { User } from '../models/users';
import { usersData } from '../database/usersdata';


export const LoginForm: React.FC = () => {
  const [users, setEventos] = useState<User[]>(usersData);

  // Estado para almacenar el nombre de usuario y contraseña
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errorMessage, setErrorMessage] = useState(''); // Para mostrar mensajes de error

  // Hook para redirigir
  const navigate = useNavigate();

  // Manejador para actualizar los valores del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Buscar el usuario en el array
    const user = users.find(u => u.user_name === formData.username && u.contrasena === formData.password);

    if (user) {
      // Si el usuario existe, redirige dependiendo de la membresía
      if (user.miembro === 1) {
        navigate('/page1'); // Redirige a la página 1
      } else if (user.miembro === 2) {
        navigate('/page2'); // Redirige a la página 2
      } else if (user.miembro === 3) {
        navigate('/page3'); // Redirige a la página 3
      } else if (user.miembro === 4) {
        navigate('/AdminDashboard'); // Redirige a la página 3
      }
    } else {
      // Si no encuentra al usuario, muestra un mensaje de error
      setErrorMessage('Usuario o contraseña incorrectos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Nombre de usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Muestra el error si existe */}

      <button type="submit">Iniciar sesión</button>
    </form>
  );
};