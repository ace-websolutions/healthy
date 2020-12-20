import React from 'react';
import { motion } from 'framer-motion';
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
          <motion.div className='graphic-item' whileHover={{ scale: 1.1 }}>
            <FaUserFriends size={60} />
            <h4>35</h4>
            <p>Clients</p>
          </motion.div>
          <motion.div className='graphic-item' whileHover={{ scale: 1.1 }}>
            <GiMeal size={60} />
            <h4>500</h4>
            <p>Meals</p>
          </motion.div>
          <motion.div className='graphic-item' whileHover={{ scale: 1.1 }}>
            <FaWeight size={60} />
            <h4>345</h4>
            <p>Pounds</p>
          </motion.div>
          <motion.div className='graphic-item' whileHover={{ scale: 1.1 }}>
            <FaHeart size={60} />
            <h4>75</h4>
            <p>Wellness</p>
          </motion.div>
          <motion.div className='graphic-item' whileHover={{ scale: 1.1 }}>
            <FaAward size={60} />
            <h4>100</h4>
            <p>Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
