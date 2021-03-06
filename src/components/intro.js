import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { motion } from 'framer-motion';
import Img from 'gatsby-image';

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "food.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

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
          <motion.a
            href='#'
            whileHover={{ scale: 1.1, backgroundColor: '#76e876' }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </div>
        <div className='picture'>
          <Img
            fluid={data.file.childImageSharp.fluid}
            title='Food'
            alt='Food on table'
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
