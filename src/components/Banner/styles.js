import styled from 'styled-components';

export const BannerContainer = styled.div`
  padding: 0;
  position: relative;
  height: 70vh;
  color: white;
`;

export const BannerBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${props => `
    linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),
    url(${props.backgroundImage})
  `};
  background-size: cover;
  background-position: center;
`;

export const BannerContent = styled.div`
  position: relative;
  padding: 4rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BannerInfo = styled.div`
  flex: 0 0 50%;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

export const BannerDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const BannerCategory = styled.h3`
  font-size: 1.5rem;
  color: #2A7AE4;
  margin-bottom: 1rem;
`;

export const PlayButton = styled.button`
  background: #2A7AE4;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1E5DAD;
  }
`;

export const VideoThumbnail = styled.div`
  flex: 0 0 40%;
  height: 300px;
  background: ${props => `url(${props.thumbnail})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.5);
`;