import React from 'react';
import DietSVG from '../images/diet.svg';
import TrackingSVG from '../images/tracking.svg';
import SupportSVG from '../images/support.svg';

const Services = () => {
  return (
    <section id='services' className='container'>
      <div className='services'>
        <div className='header'>
          <h2>What We Offer</h2>
        </div>
        <div className='services-container'>
          <div className='service-item'>
            <div className='icon-container'>
              <DietSVG />
            </div>
            <h5>Diet</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              itaque officia nam, perferendis recusandae
            </p>
          </div>
          <div className='service-item'>
            <div className='icon-container'>
              <TrackingSVG />
            </div>
            <h5>Tracking</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              itaque officia nam, perferendis recusandae
            </p>
          </div>
          <div className='service-item'>
            <div className='icon-container'>
              <SupportSVG />
            </div>
            <h5>Support</h5>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              itaque officia nam, perferendis recusandae
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
