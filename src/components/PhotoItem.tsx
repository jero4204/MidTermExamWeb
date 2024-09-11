import React from 'react';

interface PhotoItemProps {
  photo: {
    name: string;
    url: string;
    description: string;
  };
}

const PhotoItem: React.FC<PhotoItemProps> = ({ photo }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={photo.url} alt={photo.name} className="w-full h-48 object-cover mb-2 rounded-md" />
      <h2 className="text-lg font-semibold mb-2">{photo.name}</h2>
      <p className="text-gray-600 mb-4">{photo.description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Buy
      </button>
    </div>
  );
};

export default PhotoItem;