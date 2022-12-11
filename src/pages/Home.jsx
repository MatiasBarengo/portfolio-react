import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import homeBlack from '../assets/img_454749black.png'
import homeWhite from '../assets/img_454749.png'
import { Button } from 'react-bootstrap';

const Home = () => {

  const isDark = useSelector(state => state.isDark)

  const bgColor = () => {
    return isDark ? { backgroundColor: 'rgba(255,255,255, 0.85)' } : { backgroundColor: 'rgba(0,0,0, 0.85)' }
  }

  const textColor = () => {
    return isDark ? { color: 'black', textAlign: 'center' } : { color: 'white', textAlign: 'center' }
  }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyle = {
    backgroundColor: 'transparent',
    color: isDark ? 'black' : 'white',
    padding: '1rem',
    border: 'none',
    fontSize: '1.5rem',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    transition: '.5s',
    transform: isHover ? 'scale(1.2)' : 'scale(1)'
  }

  return (
    <div className='home'>
      <div className='hero-container' style={bgColor()}>
        <div className='home-info'>
          <h1 style={textColor()}>
            Matias Barengo
            <br />
            Full Stack Developer
          </h1>
          <h5 style={textColor()}>
            Design and development to add value to your production .
          </h5>
          <div>
            <Button
              className='home-btn'
              style={buttonStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a style={buttonStyle} href="src/assets/CV Matias Barengo.pdf" download={'CV Matias Barengo.pdf'}>
                <i className="fa-solid fa-file-arrow-down" style={{ fontSize: '3rem' }}></i>
                <br />
                Download CV
              </a>
            </Button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row ', justifyContent: 'space-evenly', width: '100%' }}>
            <Button
              className='home-btn'
              href="https://wa.me/541161444231"
              style={buttonStyle}
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-brands fa-whatsapp" style={{ fontSize: '4rem' }}></i>
            </Button>
            <Button
              className='home-btn'
              href="https://github.com/MatiasBarengo"
              style={buttonStyle}
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-brands fa-github" style={{ fontSize: '4rem' }}></i>
            </Button>
            <Button
              className='home-btn'
              href="https://www.linkedin.com/in/matias-barengo-79353a220/"
              style={buttonStyle}
              target="_blank"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <i className="fa-brands fa-linkedin" style={{ fontSize: '4rem' }}></i>
            </Button>
          </div>
        </div>
        <div className='home-img'>
          <img src={isDark ? homeBlack : homeWhite} alt="" />
        </div>
      </div >
      <div className="elemento">
        <a title="Saber más!" className="menuPpal suavizado" href="#ideas">
          <i
            className="fa fa-angle-down fa-2x flecha animatedColor"
            aria-hidden="true"
            style={{ color: isDark ? 'black' : 'white', borderRadius: '10px', background: isDark ? 'rgba(255,255,255, 0.85)' : 'rgba(0,0,0, 0.85)' }}>
          </i>
        </a>
      </div>
    </div >
  );
};

export default Home;
