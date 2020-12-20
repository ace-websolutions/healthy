import React from 'react';
import { motion } from 'framer-motion';
import LogoSVG from '../images/nutrition.svg';

const Landing = () => {
  return (
    <section id='landing'>
      <div className='container'>
        <div>
          <header className='landing-header'>
            <motion.div
              className='logo-container'
              drag
              dragConstraints={{
                left: -25,
                right: 25,
                top: 25,
                bottom: -25,
              }}
              whileHover={{ scale: 1.1, cursor: 'grab' }}
              whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            >
              <LogoSVG />
            </motion.div>
            <h1>Happy Healthy</h1>
            <p>
              Become happy and healthy all while feeling great! Change your diet
              and the way you feel one bite at a time.
            </p>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Landing;
