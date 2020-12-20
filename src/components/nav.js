import React from 'react';
import { Link as SmoothLink } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='container'>
      <ul>
        <li>
          <SmoothLink to='intro' smooth={true} duration={500}>
            Intro
          </SmoothLink>
        </li>
        <li>
          <SmoothLink to='services' smooth={true} duration={500}>
            Services
          </SmoothLink>
        </li>
        <li>
          <SmoothLink to='testimonial' smooth={true} duration={500}>
            Reviews
          </SmoothLink>
        </li>
        <li>
          <SmoothLink to='signUp' smooth={true} duration={500}>
            Sign Up
          </SmoothLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
