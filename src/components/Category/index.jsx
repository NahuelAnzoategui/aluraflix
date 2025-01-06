import React, { useState } from 'react';
import VideoModal from '../VideoModal';
import {
  CategorySection,
  CategoryTitle,
  VideosContainer,
  VideoCard,
  VideoThumbnail,
  CardButtons,
  CardButton
} from './styles';

const Category = ({ title, color, videos, onEdit, onDelete }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = (e, video) => {
    e.stopPropagation();
    setSelectedVideo(video);
    setIsEditing(true);
  };

  const handleDelete = (e, videoId) => {
    e.stopPropagation();
    if (window.confirm('¿Estás seguro de que quieres eliminar este video?')) {
      onDelete(videoId);
    }
  };

  const handleCardClick = (video) => {
    setSelectedVideo(video);
    setIsEditing(false);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
    setIsEditing(false);
  };

  return (
    <>
      <CategorySection>
        <CategoryTitle color={color}>{title}</CategoryTitle>
        <VideosContainer>
          {videos.map((video) => (
            <VideoCard 
              key={video.id}
              onClick={() => handleCardClick(video)}
            >
              <VideoThumbnail 
                src={video.thumb} 
                alt={video.title} 
              />
              <CardButtons className="card-buttons">
                <CardButton 
                  onClick={(e) => handleEdit(e, video)}
                  title="Editar"
                >
                  ✏️
                </CardButton>
                <CardButton 
                  delete 
                  onClick={(e) => handleDelete(e, video.id)}
                  title="Eliminar"
                >
                  🗑️
                </CardButton>
              </CardButtons>
            </VideoCard>
          ))}
        </VideosContainer>
      </CategorySection>
      
      {selectedVideo && (
        <VideoModal 
          video={selectedVideo}
          isEditing={isEditing}
          onClose={handleCloseModal}
          onSave={onEdit}
        />
      )}
    </>
  );
};

export default Category;