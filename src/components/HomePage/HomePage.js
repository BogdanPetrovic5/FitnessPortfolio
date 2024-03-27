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

function HomePage({articles}){
  
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1300);
    
        return () => clearTimeout(timer);
      }, []);
    return(
        
            <div>
                {loading ? (<Load />) : (
                    <div className='Main-Page'>
                    
                      <Cover></Cover>
                      
                    
                      <LAbout></LAbout>
                      <MyService></MyService>
                      {/* <WPlans></WPlans> */}
                      {/* <Social></Social> */}
                      {/* <LGallery></LGallery> */}
                        
                      <Feedback></Feedback>
                      <ServicesWorkoutPlans></ServicesWorkoutPlans>
                      
                      <Faq></Faq>
                      <Form id="Form"></Form>
                      <HomePageBlogBanner articles = {articles}></HomePageBlogBanner>
                      {/* <BlogPage ></BlogPage> */}
                      <div className='Contact-Banner-Container'>
                        <div className='Contact-Banner-Title'>
                            <h1 >
                              Kreni da radiš sa mnom!
                            </h1>
                            <button>
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