import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Header.css'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Header() {
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 300;
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
 
  return (
    <header className={`Header ${isSticky ? 'sticky' : ''}`} id='Header'>
      <section className='Header-Section'>
        <div className='Header-Section-Logo'>
          <img src='/assets/DJOLENCELOGO.png' alt='Logo' />
        </div>
        <nav className='Header-Section-Nav'>
          <li>
          <Link to='/'>Home</Link>
          </li>
          <li>
            <a>programs</a>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='Form' smooth={true} duration={800} offset={-250}>contact</Link>
          </li>
          <li>
            <a>join</a>
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
          <span><Link to='/'>Home</Link></span>
          <span>programs</span>
          <span>
          <Link to='/about'>About</Link>
          </span>
          
          <span><Link to='/blog'>Blog</Link></span>
          <span>contact</span>
          <span>join</span>
        </div>
      </section>
    </header>
  );
}


Header.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default Header;
