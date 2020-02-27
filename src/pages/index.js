import React from 'react';

import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = { // todo: spike how to avoid visual artifact
  images: [
    { url: require('../assets/images/matt-broch-zxEZt6xNIe0-unsplash.jpg'), position: 'center' },
    { url: require('../assets/images/rachel-jarboe-tZpmdFfU5gQ-unsplash.jpg'), position: 'center' },
    { url: require('../assets/images/toimetaja-tolkeburoo-ymGDEiGl6lA-unsplash.jpg'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header />
    <EmailForm />
    <Footer />
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
