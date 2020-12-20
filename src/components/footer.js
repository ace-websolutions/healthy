import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <section id='footer' className='container'>
      <div className='footer'>
        <div className='final-thoughts'>
          <h3>Here for you</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            dolorum ipsam nobis architecto voluptatem necessitatibus commodi
            nostrum odit maiores tenetur consequatur magnam, nihil velit
            accusantium suscipit vel corporis ipsa quod.
          </p>
          <motion.a
            href='#'
            whileHover={{ scale: 1.1, backgroundColor: '#76e876' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
        <div className='contact'>
          <h3>Reach out</h3>
          <div className='method'>
            <h5>Address</h5>
            <p>1234 Somewhere Road • Nashville, TN 00000 • USA</p>
          </div>
          <div className='method'>
            <h5>Phone</h5>
            <p>(000) 000-0000</p>
          </div>
          <div className='method'>
            <h5>Email</h5>
            <p>info@happyhealthy.com</p>
          </div>
          <div className='social'>
            <ul>
              <li>
                <FaTwitter size={25} />
              </li>
              <li>
                <FaFacebookF size={25} />
              </li>
              <li>
                <FaInstagram size={25} />
              </li>
            </ul>
          </div>
        </div>
        <ul className='copy-write'>
          <li>&copy; Ace Web Solutions. All rights reserved</li>
          <li>
            Design:{' '}
            <a
              href='http://html5up.net'
              title='HTML5 UP'
              rel='noreferrer'
              target='_blank'
            >
              HTML5 UP
            </a>
          </li>
          <li>
            Photo:{' '}
            <a
              href='https://unsplash.com/'
              title='Unsplash'
              rel='noreferrer'
              target='_blank'
            >
              Unsplash
            </a>
          </li>
          <li>
            SVG:{' '}
            <a
              href='https://www.flaticon.com/authors/smashicons'
              title='SVG Author'
              rel='noreferrer'
              target='_blank'
            >
              "Smashicons"{' '}
            </a>
            <a
              href='https://www.flaticon.com/authors/freepik'
              title='SVG Author'
              rel='noreferrer'
              target='_blank'
            >
              and "Freepik"{' '}
            </a>
            from{' '}
            <a
              href='https://www.flaticon.com/'
              title='Flaticon'
              rel='noreferrer'
              target='_blank'
            >
              Flaticon
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
