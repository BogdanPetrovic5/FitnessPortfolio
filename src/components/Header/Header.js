import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation  } from 'react-router-dom';
function Header() {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 500;
      setSticky(window.scrollY > scrollThreshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const headerElement = document.getElementById('Header');

    if (headerElement) {
      if (isSticky) {
        headerElement.classList.add("Anim");
      } else {
        headerElement.classList.remove("Anim");
      }
    }
  }, [isSticky]);

  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked(!isClicked);
  };
  const hideMenu = () =>{
    setIsClicked(!isClicked)
  }
  const scrollToContact = () =>{
    const specificSection = document.getElementById('Form');
    if (specificSection) {
        
        const offset = 100; 
        const offsetPosition = specificSection.offsetTop - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  }
  const location = useLocation();

  return (
    <header className={`Header ${isSticky ? 'sticky' : ''}`} id='Header'>
      <section className='Header-Section'>
        <div className='Header-Section-Logo'>
          <img src='/assets/DJOLENCELOGO.png' alt='Logo' />
        </div>
        <nav className='Header-Section-Nav'>
          <li  className={location.pathname === '/programs' ? 'Active-Route' : ''} >
            <Link onClick={hideMenu} to= '/programs'> USLUGE</Link>
          </li>
          <li className={location.pathname === '/about' ? 'Active-Route' : ''}>
            <Link onClick={hideMenu} to='/about'>O MENI</Link>
          </li>
          <li className={location.pathname === '/blog' ? 'Active-Route' : ''}>
            <Link onClick={hideMenu}  to='/blog'>Blog</Link>
          </li>
          <li>
            <a onClick={scrollToContact}>KONTAKT</a>
          </li>
          <li>
            <Link  to='/' >POČETNA</Link>
          </li>
        </nav>
        <div className='Drop-Down'>
          <div className={`background ${isClicked ? 'clicked' : ''}`}>
            <div className="menu__icon" onClick={handleMenuClick}>
              <span className={isClicked ? 'clicked' : ''}></span>
              <span className={isClicked ? 'clicked' : ''}></span>
              <span className={isClicked ? 'clicked' : ''}></span>
            </div>
          </div>
        </div>
        <div className={isClicked ? 'ActiveDropDown' : 'HiddenDropDown'}>
          <span><Link onClick={hideMenu}  to='/'>POČETNA</Link></span>
          <span><Link onClick={hideMenu} to='/programs'>USLUGE</Link></span>
          <span>
          <Link onClick={hideMenu}  to='/about'>O MENI</Link>
          </span>
          
          <span><Link onClick={hideMenu}  to='/blog'>BLOG</Link></span>
          <span>contact</span>
          
        </div>
      </section>
    </header>
  );
}


Header.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default Header;
