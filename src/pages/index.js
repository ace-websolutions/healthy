import * as React from 'react';

import '../styles/App.scss';

import SEO from '../components/seo';
import Landing from '../components/landing';
import Nav from '../components/nav';
import Intro from '../components/intro';
import Services from '../components/services';
import Testimonial from '../components/testimonial';
import SignUp from '../components/signUp';
import Footer from '../components/footer';

const IndexPage = () => (
  <>
    <SEO title='AWS' />
    <Landing />
    <Nav />
    <Intro />
    <Services />
    <Testimonial />
    <SignUp />
    <Footer />
  </>
);

export default IndexPage;
