// src/App.js
import React from 'react';
import './App.css';

import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Events from './components/Events/Events';
import Team from './components/Team/Team';
import Sponsors from './components/Sponsors/Sponsors';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <AnimatedBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Events />
        <Team />
        <Sponsors />
      </main>
      <Footer />
    </>
  );
}

export default App;