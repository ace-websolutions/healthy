import React from 'react';
import { motion } from 'framer-motion';
const SignUp = () => {
  return (
    <section id='signUp' className='container'>
      <div className='signUp'>
        <div className='header'>
          <h2>Sign up</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab
            itaque quo!
          </p>
          <div className='buttons'>
            <motion.a
              href='#'
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.a>
            <motion.a
              href='#'
              whileHover={{ scale: 1.1, backgroundColor: '#76e876' }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
