import React from 'react';
import Header from './Component/Header';
import HeroSection from './Component/HeroSection';
import Features from './Component/Features';
import Gallery from './Component/Gallery';
import Footer from './Component/Footer';
// import Header from 'C:/Users/Aieyaan/react folder/credo-health/src/Component/Header';
// import HeroSection from 'C:/Users/Aieyaan/react folder/credo-health/src/Component/HeroSection';
// import Features from 'C:/Users/Aieyaan/react folder/credo-health/src/Component/Features';
// import Gallery from 'C:/Users/Aieyaan/react folder/credo-health/src/Component//Gallery';
// import Footer from 'C:/Users/Aieyaan/react folder/credo-health/src/Component//Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
