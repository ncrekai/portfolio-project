// Contact.jsx || Natalie Rekai || #301484514 || 26-Sep-24

/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect, useRef } from 'react';
import building from './../assets/building.jpg'

const Contact = () => {

  // Hooks + functions to manage Lightbox display
  const [lightboxDisplay, setLightboxDisplay] = useState(false)
  const showImage = () => setLightboxDisplay(true)
  const hideImage = () => setLightboxDisplay(false)

  return (
    <div id='contact' className='page-outer'>
      <div className='page-inner'>
        { lightboxDisplay ? <Lightbox hideImage={ hideImage } /> : null }
        <div className='left-container'>
          <div className='text-box'>
            <h2>How to reach Natalie</h2>
              <p>Take a side street off Wellesley.</p>
              <p>If you see this apartment, stand under the balcony with the windchimes &ndash; and holler.</p>
            </div>
            <div onClick={showImage} className='button'>Get in touch</div>
        </div>
        <div className='right-container'>
          <div className='contact-pic'><img src={building}/></div>          
        </div>
        </div>
    </div>
  );
};


// Pop-up component to display contact form

const Lightbox = (props) => {
  const { hideImage } = props;

// Hooks + functions to manage conact response display
  const [displayGreeting, setDisplayGreeting] = useState(false)
  const [nameVal, setNameVal] = useState('')
  const textInput = useRef(null)

  useEffect(() => {
    if (nameVal !== '') {
      setDisplayGreeting(true)
      textInput.current.value = ''
    }
  }, [nameVal])

  const handleClick = (val) => setNameVal(val)

  const QUESTION = (
    <>
      <h3>What's your name?</h3>
      <input ref={textInput} type='text'/>
      <div onClick={ () => handleClick(textInput.current.value) } className='button'>SHOUT</div>
    </>
  )
  const ANSWER = (
    <>
      <h2>Hi {nameVal}. No need to shout.</h2>
      <div onClick={ hideImage } className='button'>Go back?</div>
    </>
  )

  return (
    <div className='lightbox-container'>
      <div id='contact-input' className='contact lightbox-display'>
        { displayGreeting ? ANSWER : QUESTION }
      </div>
    </div>
  )
}

export default Contact; 