import React from 'react';
import LogoSVG from '../images/nutrition.svg';

const Landing = () => {
  return (
    <section id='landing'>
      <div className='container'>
        <div>
          <header className='landing-header'>
            <div className='logo-container'>
              <LogoSVG />
            </div>
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
