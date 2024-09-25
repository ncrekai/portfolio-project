/* eslint-disable no-unused-vars */
import { useState } from 'react';
import shelf from '../assets/shelf.jpg';
import figure from '../assets/figure.jpg';
import flowers from '../assets/flowers.jpg';
import candlestick from '../assets/candlestick.jpg';
import bowl from '../assets/bowl.jpg';
import bookend from '../assets/bookend.jpg';

const Projects = () => {
  const projImages = [shelf, figure, flowers, candlestick, bowl, bookend];
  const imageCards = projImages.map((img,i) => {
    if (img === bowl || img === bookend) {
      return (<div key={`project-${i}`} className='wide project-image'><img src={img}/></div>)
    } else {
      return (<div key={`project-${i}`} className='tall project-image'><img src={img}/></div>)}
  })

  return (
    <div id='projects' className='page-outer'>
      <div className='page-inner'>
      <div className='left-container'>
          <div className='text-box'>
            <h2>Projects</h2>
            <p>I made these</p>
          </div>
        </div>
        <div className='right-container'>
          <div className='project-box'>
            {imageCards}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;

const Lightbox = (props) => {

}