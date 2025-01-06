import React, { useState, useEffect } from 'react';
import {
  BannerContainer,
  BannerBackground,
  BannerContent,
  BannerInfo,
  BannerTitle,
  BannerDescription,
  BannerCategory,
  PlayButton,
  VideoThumbnail
} from './styles';

const featuredVideos = [
  {
    id: 1,
    title: "Matrix Resurrections",
    description: "Regresa a un mundo de dos realidades: una, la vida cotidiana; la otra, lo que hay detrás de ella. Para saber si su realidad es una construcción física o mental, y para conocerse a sí mismo, el Sr. Anderson tendrá que optar una vez más por seguir al conejo blanco.",
    category: "Ciencia Ficción",
    imageUrl: "/matrix.jpg",
    thumbnailUrl: "/matrix-thumb.jpg" // Necesitarás agregar esta imagen
  },
  {
    id: 2,
    title: "Dune",
    description: "Un viaje mítico y emotivo, 'Dune' cuenta la historia de Paul Atreides, un joven brillante que nació con un destino más grande que él mismo.",
    category: "Aventura",
    imageUrl: "/dune.jpg",
    thumbnailUrl: "/dune-thumb.jpg" // Necesitarás agregar esta imagen
  },
  // Puedes agregar más videos aquí
];

const Banner = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentVideo((prev) => 
        prev === featuredVideos.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const video = featuredVideos[currentVideo];

  const handlePlay = () => {
    console.log('Reproduciendo:', video.title);
    // Aquí puedes agregar la lógica para reproducir el video
  };

  return (
    <BannerContainer>
      <BannerBackground backgroundImage={video.imageUrl} />
      <BannerContent>
        <BannerInfo>
          <BannerCategory>{video.category}</BannerCategory>
          <BannerTitle>{video.title}</BannerTitle>
          <BannerDescription>{video.description}</BannerDescription>
          <PlayButton onClick={handlePlay}>
            ▶ Reproducir
          </PlayButton>
        </BannerInfo>
        <VideoThumbnail thumbnail={video.thumbnailUrl} />
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;