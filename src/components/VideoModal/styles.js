import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: #141414;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  position: relative;
  color: white;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    color: #2A7AE4;
  }
`;

export const VideoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const VideoDescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

export const VideoInfo = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const VideoThumbnailLarge = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #555;
  background: #333;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #2A7AE4;
  }
`;

export const TextArea = styled.textarea`
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #555;
  background: #333;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #2A7AE4;
  }
`;

export const Button = styled.button`
  background: #2A7AE4;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #1E5DAD;
  }
`;