import React from 'react';
// import 'C:/Users/Aieyaan/react folder/credo-health/src/styles/Features.css';
import '../styles/Features.css';

const Features = () => {
  const features = [
    { title: "Feature 1", description: "Innovative healthcare solutions." },
    { title: "Feature 2", description: "Patient-centered approach." },
    { title: "Feature 3", description: "Advanced technology integration." },
  ];

  return (
    <section className="features" id="services">
      <h2>Our Services</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
