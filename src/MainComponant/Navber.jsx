import { useEffect, useRef, useState } from "react";
import './Nav.css'
import { Link, NavLink } from 'react-router'

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [underlineStyle, setUnderlineStyle] = useState({});
  const navRef = useRef(null);

  const handleNavClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const parentRect = navRef.current.getBoundingClientRect();

    setUnderlineStyle({
      left: rect.left - parentRect.left,
      width: rect.width,
    });
  };


  return (
    <>
      <nav>
        <div className='logo'><h1>Sanjib<span>.</span></h1></div>
        <div className='detailsec' ref={navRef}>
          <ul>
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#service" onClick={handleNavClick}>Services</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Experience</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
            {/* <li><NavLink to='/' onClick={handleNavClick}>Home</NavLink></li>
            <li><NavLink to='/About' onClick={handleNavClick}>About</NavLink></li>
            <li><NavLink to='/Skills' onClick={handleNavClick}>Skills</NavLink></li>
            <li><NavLink to='/Projects' onClick={handleNavClick}>Projects</NavLink></li>
            <li><NavLink to='/Services' onClick={handleNavClick}>Services</NavLink></li>
            <li><NavLink to='/Experience' onClick={handleNavClick}>Experience</NavLink></li>
            <li><NavLink to='/Contact' onClick={handleNavClick}>Contact</NavLink></li> */}
          </ul>
          <div className="underline" style={underlineStyle}></div>
        </div>

        {isOpen && (
          <div className={`mobile-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
            <ul>
              <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
              <li><a href="#service" onClick={() => setIsOpen(false)}>Services</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)}>Experience</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
        <div className='menu' >
          <button className="dropbtn"
            onClick={() => setIsOpen(!isOpen)}>
            <i class="fa-solid fa-bars"></i></button>
        </div>
        <div className='cvdownload'>
          Download CV
          <i className="fa-solid fa-download"></i>
        </div>
      </nav>
    </>
  )
}

export default Navber
