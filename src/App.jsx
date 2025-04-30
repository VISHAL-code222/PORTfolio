import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

import './App.css';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // match animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
