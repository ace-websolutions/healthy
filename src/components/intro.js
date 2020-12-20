import React from 'react';
import food from '../images/food.jpg';

const Intro = () => {
  return (
    <section id='intro' className='container'>
      <div className='intro'>
        <div className='info'>
          <h3>Personalized Nutrition</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quasi
            beatae ullam nesciunt molestiae veniam natus atque officia, qui
            praesentium, corporis odio cupiditate iste temporibus hic? Vitae
            quam rerum deleniti?
          </p>
          <a href='#'>Learn More</a>
        </div>
        <div className='picture'>
          <img src={food} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Intro;
