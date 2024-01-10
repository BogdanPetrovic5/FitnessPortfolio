import './App.css';
import Header from './components/Header/Header'
import Cover from './components/Cover/Cover';
import LAbout from './components/LandingAbout/LandingAbout';
import WPlans from './components/WorkoutPlans/WorkoutPlan';
import LGallery from './components/LandingGallery/LGallery';
import Form from './components/ContactForm/Form';
import Social from './components/Socials/Social';
import Footer from './components/Footer/Footer';
import BlogPage from './components/BlogPage/BlogPage';
import React, { useState } from 'react';
function App() {
  const [showMainPage, setShowMainPage] = useState(false);

  const handleNavClick = (page) => {
    if (page === 'main') {
      setShowMainPage(true);
    } else if (page === 'blog') {
      setShowMainPage(false);
    }
  };
  return (
    <div className='Container'>
      <Header onNavClick={handleNavClick}></Header>
      

      {showMainPage ? (
        <div className='Main-Page'>
            <Cover></Cover>
          <LAbout></LAbout>
          <WPlans></WPlans>
          
          <LGallery></LGallery>
          <Social></Social>
          <Form id="Form"></Form>
        </div>
      ) : (
        <div className='Blog'>
         <BlogPage></BlogPage>
        </div>
      )}

      <Footer></Footer>
    </div>
    
  );
}

export default App;
