import React, { useState } from 'react';

interface AddPhotoFormProps {
  addPhoto: (photo: { name: string; url: string; description: string }) => void;
}

const AddPhotoForm: React.FC<AddPhotoFormProps> = ({ addPhoto }) => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que los campos no estén vacíos
    if (!name || !url || !description) {
      setError('All fields are required');
      return(error);
    }

    // Limpiar el mensaje de error
    setError('');

    // Añadir la foto si todos los campos están completos
    addPhoto({ name, url, description });

    // Limpiar los campos del formulario
    setName('');
    setUrl('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <label className="block text-sm font-bold mb-2">Photo Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-2">Photo URL</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          className="w-full p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
        Add Photo
      </button>
    </form>
  );
};

export default AddPhotoForm;