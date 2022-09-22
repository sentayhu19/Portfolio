import React, {useState} from 'react'
import './Header.css';
import logo from '../../assets/images/logo.png';
const Header = () => {
    //scrolling header at the top of the page 
    window.addEventListener('scroll', function(){
        const header = document.querySelector('.header');
        header.classList.toggle("sticky", window.scrollY > 100);
    });
const [Mobile, setMobile] = useState(false);
  return (
    <>
  <header className='header'>
    <div className='container d_flex'>
        <div className='logo'>
            <img src={logo} alt="Logo" className='logo'/>
        </div>
        <div className='navlink'>
            {/* <ul className='link f_flex uppercase'> */}
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
                <li><a href="#home">Home</a></li>
                <li><a href="#">Fetures</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href='#blog'>Blog</a></li>
                <li><a href="#contact">Clinet</a></li>
                <li><button className='home-btn'>BUY NOW</button></li>
                </ul>
                <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
        </div>
    </div>
    </header>
    </>
    
  )
} 

export default Header;