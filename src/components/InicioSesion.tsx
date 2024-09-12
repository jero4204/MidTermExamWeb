import React, { useState } from 'react';

export const LoginForm: React.FC = () => {
  // Estado para almacenar el nombre de usuario y contraseña
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

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
    // Aquí puedes guardar los datos, enviarlos a una API, etc.
    console.log('Datos ingresados:', formData);
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
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};