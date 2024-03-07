import './App.css';

import Header from './components/Header/Header'
// import Cover from './components/Cover/Cover';
// import LAbout from './components/LandingAbout/LandingAbout';
// import WPlans from './components/WorkoutPlans/WorkoutPlan';
// import LGallery from './components/LandingGallery/LGallery';
// import Form from './components/ContactForm/Form';
// import Social from './components/Socials/Social';
import Footer from './components/Footer/Footer';
import BlogPage from './components/BlogPage/BlogPage';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';


function App() {
  
  return (
    <Router>
    <div className='Container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
      <Footer />
      
    </div>
  </Router>
    
  );
}

export default App;
