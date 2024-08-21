import React from 'react';
// import './Header.css';

const Header = () => {
  const toggleMenu = () => {
    document.querySelector('#menu-icon').classList.toggle('bx-x');
    document.querySelector('.navbar').classList.toggle('active');
  };

  return (
    <>
    <link href='https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css' rel='stylesheet' />
    <header className="header">
      <a href="#home" className="logo">My Creative <span>HUB</span></a>
      <i className='bx bx-menu' id="menu-icon" onClick={toggleMenu}></i>
      <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#education">Education</a>
        <a href="#services">Experience</a>
        <a href="#tech">Tech</a>
        <a href="#contact">Contacts</a>
      </nav>
    </header>
    </>
  );
};

export default Header;
