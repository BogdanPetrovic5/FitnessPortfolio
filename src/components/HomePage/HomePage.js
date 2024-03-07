import React from 'react'
import './HomePage.css'

import Cover from '../Cover/Cover';
import LAbout from '../LandingAbout/LandingAbout';
import WPlans from '../WorkoutPlans/WorkoutPlan';
import LGallery from '../LandingGallery/LGallery';
import Form from '../ContactForm/Form';
import Social from '../Socials/Social';
import Banner from '../Banner/Banner';

import Newsletter from '../Newsletter/Newsletter';
import MyService from '../MyServices/MyService';
import BlogPage from '../BlogPage/BlogPage';
import HomePageBlogBanner from '../HomePageBlogBanner/HomePageBlogBanner';
import Feedback from '../ClientsFeedback/Feedback';
function HomePage(){
    return(
        <div className='Main-Page'>
            <Cover></Cover>
            <MyService></MyService>
            <LAbout></LAbout>
            
            <WPlans></WPlans>
            
            <LGallery></LGallery>
            <Feedback></Feedback>
           
            <Form id="Form"></Form>
            <HomePageBlogBanner></HomePageBlogBanner>
            <BlogPage></BlogPage>
            
            
            
        </div>
    )
}
export default HomePage