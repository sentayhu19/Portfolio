import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  // scrolling header at the top of the page
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('active', window.scrollY > 100);
  });
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="Logo" data-aos="flip-up" className="logo" />
          </div>
          <div className="navlink">
            {/* <ul className='link f_flex uppercase'> */}
            <ul className={Mobile ? 'nav-links-mobile' : 'link f_flex uppercase'} onClick={() => setMobile(false)}>
              <li><a href="#home">Home</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#resume">Resume</a></li>
              <li><a href="#blog">Blog</a></li>
              <li>
                <button type="button" className="home-btn">
                  <a href="https://github.com/sentayhu19" target="_blank" rel="noreferrer">
                    <i className="fab fa-github" />
                  </a>
                </button>
              </li>
              <li><button type="button" className="home-btn"><a href="#contact">Hire Me</a></button></li>
            </ul>
            <button type="button" className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className="fas fa-times close home-btn" /> : <i className="fas fa-bars open" />}
            </button>
          </div>
        </div>
      </header>
    </>

  );
};

export default Header;
