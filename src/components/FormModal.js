import React, { useState } from "react";

const FormModal = ({ onClose, onSave }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && url) {
      onSave({ title, url });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          width: "80%",
          maxWidth: "400px",
          position: "relative",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            background: "red",
            color: "#fff",
            border: "none",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Cerrar
        </button>
        <h2>Nuevo Video</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label>Título:</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label>URL del Video:</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "5px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
