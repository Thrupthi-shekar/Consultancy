import React from 'react';
import { useState, useEffect } from 'react';
import Footer from './Footer.js';
import HomePage from './HomePage.js';
import AboutUs from './AboutUs.js';
import Services from './Services.js';
import ContactUs from './ContactUs.js';
import BlogNews from './BlogNews.js';
import Careers from './Careers.js';
import './styles.css'
import "bootstrap/dist/css/bootstrap.min.css";


// useState Hook stores current section 
const Home = () => {
  const [currentSection, setCurrentSection] = useState('#homepage');

  // updates the current section when nav link is clicked
  const handleNavClick = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    setCurrentSection(targetId);
  };
  // used to set a initial section to homepage
  useEffect(() => {
    setCurrentSection('#homepage');
  }, []);

  return (
    <>
     <header>
  <nav>
    <ul>
      <li><a href="#homepage" onClick={handleNavClick}>Homepage</a></li>
      <li><a href="#about-us" onClick={handleNavClick}>About Us</a></li>
      <li><a href="#services" onClick={handleNavClick}>Services</a></li>
      <li><a href="#contact-us" onClick={handleNavClick}>Contact Us</a></li>
      <li><a href="#blog-news" onClick={handleNavClick}>Blog</a></li>
      <li><a href="#careers" onClick={handleNavClick}>Careers</a></li>
    </ul>
  </nav>
</header>
      <section id="content">
        {currentSection === '#homepage' && <HomePage />}
        {currentSection === '#about-us' && <AboutUs />}
        {currentSection === '#services' && <Services />}
        {currentSection === '#contact-us' && <ContactUs />}
        {currentSection === '#blog-news' && <BlogNews />}
        {currentSection === '#careers' && <Careers />}
      </section>
      <Footer />
    </>
  );
};

export default Home;
