import React, { useState } from 'react';
import AddPhotoForm from './AddPhotoForm';
import PhotoItem from './PhotoItem';
import { Photo } from "../models/photo";
const Album: React.FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);
  
    const addPhoto = (newPhoto: Photo) => {
      setPhotos([...photos, newPhoto]);
    };
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Photo Album</h1>
        <AddPhotoForm addPhoto={addPhoto} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {photos.map((photo, index) => (
            <PhotoItem key={index} photo={photo} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Album;