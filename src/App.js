import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Education from './components/Education';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechStack from './components/TechStack';
function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
          });
        }
      });
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Home />
      <Education />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
