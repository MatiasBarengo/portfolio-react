import React from 'react';
import { useSelector } from 'react-redux';

const AboutMe = () => {

  const isDark = useSelector(state => state.isDark)

  const bgColor = () => {
    return isDark ? { backgroundColor: 'rgba(255,255,255, 0.85)' } : { backgroundColor: 'rgba(0,0,0, 0.85)' }
  }

  const textColor = () => {
    return isDark ? { color: 'black', textAlign: 'center' } : { color: 'white', textAlign: 'center' }
  }

  return (
    <div className='about-me'>
      <div className='about-me-container' style={bgColor()}>
        
      </div>
    </div>
  );
};

export default AboutMe;