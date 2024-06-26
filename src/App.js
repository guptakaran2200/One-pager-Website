import './App.css';
import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToAbout={scrollToAbout} />
      <Home aboutRef={aboutRef} />
      <div className="container my-3">
        <About />
      </div>
    </>
  );
}

export default App;
