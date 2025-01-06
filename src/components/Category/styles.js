import styled from 'styled-components';

export const CategorySection = styled.section`
  padding: 2rem;
  margin: 2rem 0;
`;

export const CategoryTitle = styled.h2`
  color: ${props => props.color || '#2A7AE4'};
  font-size: 2rem;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 4px solid ${props => props.color || '#2A7AE4'};
`;

export const VideosContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem 0;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #000;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
`;

export const VideoCard = styled.div`
  flex: 0 0 320px;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    
    .card-buttons {
      opacity: 1;
    }
  }
`;

export const VideoThumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 4px;
`;

export const CardButtons = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0, 0, 0, 0.7);
  padding: 4px;
  border-radius: 4px;
`;

export const CardButton = styled.button`
  background: ${props => props.delete ? '#DC3545' : '#2A7AE4'};
  color: white;
  border: none;
  padding: 6px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.delete ? '#C82333' : '#1E5DAD'};
  }
`;