import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Browse from './components/Browse.js';
import Product from './components/Product.js';
import Clients from './components/Clients.js';
import Footer from './components/Footer.js';
import AssideMenu from './components/AssideMenu.js';

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Browse/>
      <Product/>
      <Clients/>
      <AssideMenu/>
      <Footer/>
    </>
  );
}

export default App;
