import React from 'react';
import About from '../About/About';
import Services from '../Services/Services';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Banner from './Header/Banner/Banner';
import Review from './Review/Review';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
