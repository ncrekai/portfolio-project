/* eslint-disable react/no-unescaped-entities */
import aboutPic from '../assets/IMG_8193.jpg'
const About = () => {
  return (
    <div id='about' className='about-container page-outer'>
      <div className='page-inner'>
        <div className='left-container'>
          <div className='text-box'>
            <h2>About Natalie <span className='small'>(she/they)</span></h2>
              <p>Trivia-hoarder, media-sifter, emotion-blurter and hyphen-enthusiast.</p>
              <p>Former marketing consultant, self-taught programmer, just trying to fill in the gaps so I can get a better paying tech job that lets me spend more time being a blacksmith.</p>
              <p>I don't believe in astrology but when I tell someone I'm a libra most people say "That makes sense."</p>
            </div>
        </div>
        <div className='right-container'>
          <div className='about-pic'><img src={aboutPic}/></div>          
        </div>
      </div>
    </div>
  );
};
export default About;
