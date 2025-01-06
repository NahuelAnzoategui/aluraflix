import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Category from './components/Category';
import Footer from './components/Footer';
import GlobalStyle from './styles/global';
import { categories } from './data/categories';

function App() {
  const [categoriesData, setCategoriesData] = useState(categories);

  const handleEditVideo = (updatedVideo) => {
    setCategoriesData(prevCategories => {
      return prevCategories.map(category => ({
        ...category,
        videos: category.videos.map(video => 
          video.id === updatedVideo.id ? updatedVideo : video
        )
      }));
    });
  };

  const handleDeleteVideo = (videoId) => {
    setCategoriesData(prevCategories => {
      return prevCategories.map(category => ({
        ...category,
        videos: category.videos.filter(video => video.id !== videoId)
      }));
    });
  };

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Banner />
      {categoriesData.map(category => (
        <Category 
          key={category.id}
          title={category.title}
          color={category.color}
          videos={category.videos}
          onEdit={handleEditVideo}
          onDelete={handleDeleteVideo}
        />
      ))}
      <Footer />
    </BrowserRouter>
  );
}

export default App;