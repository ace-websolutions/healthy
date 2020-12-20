import React from 'react';
import { FaUserFriends, FaWeight, FaHeart, FaAward } from 'react-icons/fa';
import { GiMeal } from 'react-icons/gi';

const Testimonial = () => {
  return (
    <section id='testimonial' className='container'>
      <div className='testimonial'>
        <div className='header'>
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            beatae voluptatem molestiae laudantium possimus expedita?
          </p>
        </div>
        <div className='graphics'>
          <div className='graphic-item'>
            <FaUserFriends size={60} />
            <h4>35</h4>
            <p>Clients</p>
          </div>
          <div className='graphic-item'>
            <GiMeal size={60} />
            <h4>500</h4>
            <p>Meals</p>
          </div>
          <div className='graphic-item'>
            <FaWeight size={60} />
            <h4>345</h4>
            <p>Pounds</p>
          </div>
          <div className='graphic-item'>
            <FaHeart size={60} />
            <h4>75</h4>
            <p>Wellness</p>
          </div>
          <div className='graphic-item'>
            <FaAward size={60} />
            <h4>100</h4>
            <p>Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
