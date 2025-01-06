import React, { useState } from "react";
import FormModal from "./FormModal";

const VideoList = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [videos, setVideos] = useState([
    { id: 1, title: "Video 1", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 2, title: "Video 2", url: "https://www.youtube.com/embed/3JZ_D3ELwOQ" },
  ]);

  const openFormModal = () => setIsFormModalOpen(true);
  const closeFormModal = () => setIsFormModalOpen(false);

  const addNewVideo = (newVideo) => {
    setVideos([...videos, { id: videos.length + 1, ...newVideo }]);
    closeFormModal();
  };

  return (
    <div>
      <h1>AluraFlix</h1>
      <button
        onClick={openFormModal}
        style={{
          marginBottom: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Nuevo Video
      </button>
      <div>
        {videos.map((video) => (
          <div key={video.id} style={{ marginBottom: "20px" }}>
            <h2>{video.title}</h2>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
      {isFormModalOpen && (
        <FormModal onClose={closeFormModal} onSave={addNewVideo} />
      )}
    </div>
  );
};

export default VideoList;
