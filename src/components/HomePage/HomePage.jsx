import React from 'react'
import './HomePage.css'

import Cover from '../Cover/Cover';
import Load from '../Loading/Load';
import LAbout from '../LandingAbout/LandingAbout';
import WPlans from '../WorkoutPlans/WorkoutPlan';
import LGallery from '../LandingGallery/LGallery';
import Form from '../ContactForm/Form';
import Social from '../Socials/Social';
import Banner from '../Banner/Banner';
import Faq from '../FAQ/Faq';
import Newsletter from '../Newsletter/Newsletter';
import MyService from '../MyServices/MyService';
import BlogPage from '../BlogPage/BlogPage';
import HomePageBlogBanner from '../HomePageBlogBanner/HomePageBlogBanner';
import Feedback from '../ClientsFeedback/Feedback';
import { useEffect, useState } from 'react';
import ServicesWorkoutPlans from '../ServicesWorkoutPlans/ServicesWorkoutPlans';
import BB from './images/BB.jpg'
import PL from './images/PL.jpg'
import PB from './images/PB.jpg'
import { Helmet } from 'react-helmet';
function HomePage({articles}){
    const scrollToContact = () =>{
        const specificSection = document.getElementById('Form');
        if (specificSection) {
            
            const offset = 100; 
            const offsetPosition = specificSection.offsetTop - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
      }
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1300);
    
        return () => clearTimeout(timer);
      }, []);
    return(
       
            <div>
                    <Helmet>
                        <meta name="description" content="Đorđe Marinković | PT " />
                        <meta name="keywords" content="Personal Trainer, Physiotherapist, Health, Food, Bodybuilding, Bodibilding, Personalni trener, Hrana, Zdravlje" />
                        <meta property="og:title" content="Početna stranica" />
                        <meta property="og:description" content="Dobrodošli na moj portfolio!" />
                        <meta property="og:url" content="https://djoledjokica" />
                        <meta property="og:type" content="website" />
                        <link rel="canonical" href="https://djoledjokica" />
  
                    </Helmet>
                {loading ? (<Load />) : (
                    <div className='Main-Page'>
                    
                      <Cover></Cover>
                      
                    
                      <LAbout></LAbout>
                      <MyService></MyService>
                      {/* <WPlans></WPlans> */}
                      {/* <Social></Social> */}
                      {/* <LGallery></LGallery> */}
                      <ServicesWorkoutPlans></ServicesWorkoutPlans>
                      <div className='Workout-Types' id='Workout-Details'>
                <div className='Workout-Types-Description'>
                    <div className='Workout-Types-Title'>
                        <h1 className='Decoration-Titles'>Tipovi planova</h1>
                    </div>
                    <h1 className='Workout-Types-Title-h1'>
                        Ne znas sta koji plan znaci?<span> Pogledaj detaljnije!</span> 
                    </h1>
                </div>
                <div className='Workout-Types-Card-Wrap'>
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${BB})` }}>
                        <h1>
                            Bodybuilding
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                        </div>
                    </div>
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PB})` }}>
                    <h1>
                            Powerbuilding
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                            </p>
                        </div>
                    </div>
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PL})` }}>
                        <h1>
                            Powerlifting
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                      <Feedback></Feedback>
                      
                      
                      <Faq></Faq>
                      <Banner></Banner>
                      <Form id="Form"></Form>
                      <HomePageBlogBanner articles = {articles}></HomePageBlogBanner>
                      {/* <BlogPage ></BlogPage> */}
                      <div className='Contact-Banner-Container'>
                        <div className='Contact-Banner-Title'>
                            <h1 >
                              Kreni da radiš sa mnom!
                            </h1>
                            <button onClick={()=>scrollToContact()}>
                              Kontaktiraj me!
                            </button>
                        </div>
                      </div>
                

                    </div>
                )}
                
            </div>
                
            
        
        
    );
}
export default HomePage