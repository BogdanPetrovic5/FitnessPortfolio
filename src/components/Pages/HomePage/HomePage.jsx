import React from 'react'
import './HomePage.css'
import Cover from '../../ReusableComponents/Cover/Cover';

import LAbout from '../../ReusableComponents/LandingAbout/LandingAbout';
import Form from '../../ReusableComponents/ContactForm/Form';
import Banner from '../../ReusableComponents/Banner/Banner';
import Faq from '../../ReusableComponents/FAQ/Faq';
import MyService from '../../ReusableComponents/MyServices/MyService';
import HomePageBlogBanner from '../../ReusableComponents/HomePageBlogBanner/HomePageBlogBanner';
import Feedback from '../../ReusableComponents/ClientsFeedback/Feedback';
import { useEffect, useState } from 'react';
import ServicesWorkoutPlans from '../../ReusableComponents/ServicesWorkoutPlans/ServicesWorkoutPlans';

import { Helmet } from 'react-helmet';
import WorkoutTypes from '../../ReusableComponents/WorkoutTypes/WorkoutType';
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
        }, 50000);
    
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
                
                    <div className='Main-Page'>
                      <Cover></Cover>
                      <LAbout></LAbout>
                      <MyService></MyService>
                      <ServicesWorkoutPlans></ServicesWorkoutPlans>
                     <WorkoutTypes></WorkoutTypes>
                        <Feedback/>
                      
                        <Faq/>
                        <Banner/>
                        <Form id="Form"/>
                        <HomePageBlogBanner articles = {articles}/>
                        <div className='Contact-Banner-Container'>
                            <div className='Contact-Banner-Title'>
                                <h1 >
                                Start working with me!
                                </h1>
                                <button onClick={()=>scrollToContact()}>
                                Contact me!
                                </button>
                            </div>
                        </div>
                    </div>
                
                
            </div> 
    );
}
export default HomePage