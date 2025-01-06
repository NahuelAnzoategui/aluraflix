import React, { useState, useEffect } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  VideoTitle,
  VideoDescription,
  VideoInfo,
  VideoThumbnailLarge,
  Form,
  Input,
  TextArea,
  Button
} from './styles';

const VideoModal = ({ video, isEditing, onClose, onSave }) => {
  const [formData, setFormData] = useState(video);

  useEffect(() => {
    setFormData(video);
  }, [video]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!video) return null;

  if (isEditing) {
    return (
      <ModalOverlay onClick={onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={onClose}>×</CloseButton>
          <Form onSubmit={handleSubmit}>
            <Input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Título del video"
            />
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Descripción del video"
            />
            <Input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duración"
            />
            <Input
              name="thumb"
              value={formData.thumb}
              onChange={handleChange}
              placeholder="URL de la miniatura"
            />
            <Button type="submit">Guardar cambios</Button>
          </Form>
        </ModalContent>
      </ModalOverlay>
    );
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <CloseButton onClick={onClose}>×</CloseButton>
        <VideoThumbnailLarge 
          src={video.thumb} 
          alt={video.title} 
        />
        <VideoTitle>{video.title}</VideoTitle>
        <VideoDescription>{video.description}</VideoDescription>
        <VideoInfo>
          <span>Categoría: {video.category}</span>
          <span>Duración: {video.duration}</span>
        </VideoInfo>
      </ModalContent>
    </ModalOverlay>
  );
};

export default VideoModal;