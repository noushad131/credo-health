import React from 'react';
// import 'C:/Users/Aieyaan/react folder/credo-health/src/styles/Gallery.css';
import '../styles/Gallery.css';
import fitness1 from "../assets/4.jpeg";
import fitness2 from "../assets/5.jpeg";
import fitness3 from "../assets/3.jpg";

const Gallery = () => {
  const galleryItems = [
    { image: fitness1, title: "Project 1" },
    { image: fitness2, title: "Project 2" },
    { image: fitness3, title: "Project 3" },
  ];  

  return (
    <section className="gallery">
      <h2>Our Projects</h2>
      <div className="gallery-grid">
        {galleryItems.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
