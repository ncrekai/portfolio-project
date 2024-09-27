// About.jsx || Natalie Rekai || #301484514 || 26-Sep-24

/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import aboutPic from '../assets/IMG_8193.jpg'
import resume from './../assets/NatalieRekai-resume.jpg'

const About = () => {

  // Hooks + functions to manage Lightbox display
  const [lightboxDisplay, setLightboxDisplay] = useState(false)

  const showImage = () => setLightboxDisplay(true)
  const hideImage = () => setLightboxDisplay(false)

  return (
    <div id='about' className='about-container page-outer'>
      <div className='page-inner'>
      { lightboxDisplay ? <Lightbox hideImage={ hideImage } /> : null }
        <div className='left-container'>
          <div className='text-box'>
            <h2>Natalie Rekai <span className='small'>(she/they)</span></h2>
            <p>Trivia-hoarder, media-sifter, emotion-blurter and hyphen-enthusiast.</p>
            <p>Former marketing consultant, self-taught programmer, just trying to fill in the gaps so I can get a better paying tech job that lets me spend more time being a blacksmith.</p>
            <p>I don't believe in astrology but when I tell someone I'm a libra most people say "That makes sense."</p>
            <div onClick={ showImage } className='button'>Resum&#233;</div>
          </div>
        </div>
        <div className='right-container'>
          <div className='about-pic'><img src={aboutPic}/></div>          
        </div>
      </div>
    </div>
  );
};

// Pop-up component to display resume

const Lightbox = (props) => {
  const { hideImage } = props;
  return (
    <div onClick={ hideImage } className='lightbox-container'>
      <div className='lightbox-display'>
        <img onClick={ hideImage } src={ resume } />
      </div>
    </div>
  )
}

export default About;
