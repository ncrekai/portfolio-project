/* eslint-disable react/no-unescaped-entities */
import reactIcon from '../assets/service/react.svg'
import htmlIcon from '../assets/service/html5.svg'
import wordpressIcon from '../assets/service/wordpress.svg'
import javascriptIcon from '../assets/service/javascript.svg'
import reduxIcon from '../assets/service/redux.svg'
import sqlIcon from '../assets/service/sql.svg'
import oracleIcon from '../assets/service/oracle.svg'
import javaIcon from '../assets/service/java.svg'
import photoshopIcon from '../assets/service/photoshop.svg'


const Services = () => {

  const iconArr = [reactIcon, htmlIcon, wordpressIcon, javascriptIcon, reduxIcon, sqlIcon, oracleIcon, javaIcon, photoshopIcon]
  
  return (
    <div id='services' className='services-container page-outer'>
      <div className='page-inner'>
      <div className='left-container'>
          <div className='text-box'>
            <h2>Services</h2>
              <p>Need someone who can use any of these 9 things? I'm your guy!</p>
              <p></p>
            </div>
        </div>
        <div className='right-container'>
          <div className='icon-box'>
            { iconArr.map((el,i) => <div key={`icon-${i}`} className='service-icon'><img src={el}/></div>) }
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
