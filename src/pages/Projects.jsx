// Projects.jsx || Natalie Rekai || #301484514 || 26-Sep-24

import { useState } from 'react';
import shelf from '../assets/shelf.jpg';
import figure from '../assets/figure.jpg';
import flowers from '../assets/flowers2.jpg';
import candlestick from '../assets/candlestick2.jpg';
import bowl from '../assets/bowl.jpg';
import bookend from '../assets/bookend.jpg';

const Projects = () => {

  // Hooks + functions to manage Lightbox display
  const [lightboxDisplay, setLightboxDisplay] = useState(false)
  const [displayImage, setDisplayImage] = useState(null)
  const showImage = (img) => {
    setDisplayImage(img)
    setLightboxDisplay(true)
  }
  const hideImage = () => {
    setDisplayImage(null)
    setLightboxDisplay(false)
  }

  const projImages = [shelf, figure, flowers, candlestick, bowl, bookend];

  const imageCards = projImages.map((img,i) => {
    return (<div key={`project-${i}`} style={{backgroundImage: `url(${img})`}} className='project-image' onClick={ () => showImage(img) }></div>)
  })

  return (
    <div id='projects' className='page-outer'>
      <div className='page-inner'>
      { lightboxDisplay ? <Lightbox image={ displayImage } hideImage={ hideImage } /> : null }
      <div className='left-container'>
          <div className='text-box'>
            <h2>Projects</h2>
            <p>I made these out of really hot metal I hit with a hammer.</p>
          </div>
        </div>
        <div className='right-container'>
          <div className='project-box'>
            { imageCards }
          </div>
        </div>
      </div>
    </div>
  );
};


// Pop-up component to display images

const Lightbox = (props) => {
  const { image, hideImage } = props;
  return (
    <div onClick={ hideImage } className='lightbox-container'>
      <div className='lightbox-display'>
        <img onClick={ hideImage } src={ image } />
      </div>
    </div>
  )
}

export default Projects;