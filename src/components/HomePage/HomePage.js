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

function HomePage(){
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1000);
    
        return () => clearTimeout(timer);
      }, []);
    return(
        
            <div>
                {loading ? (<Load />) : (
                    <div className='Main-Page'>
                    
                    <Cover></Cover>
                    
                    <MyService></MyService>
                    <LAbout></LAbout>
                    
                    <WPlans></WPlans>
                    
                    <LGallery></LGallery>
                    <Feedback></Feedback>
                
                    <Form id="Form"></Form>
                    <Faq></Faq>
                    <HomePageBlogBanner></HomePageBlogBanner>
                    <BlogPage></BlogPage>
                    
                
                
                    </div>
                )}
                
            </div>
                
            
        
        
    );
}
export default HomePage