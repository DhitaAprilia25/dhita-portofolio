import React from 'react';
import Hero from "./Hero/Hero";
import About from './About/About';
import Projects from './Project/Project';
import Contact from './Contact/contact';
import Footer from './footer/footer';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer /> 
    </div>
  );
};

export default Home;
