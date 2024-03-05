import React from 'react'
import './HomePage.css'

import Cover from '../Cover/Cover';
import LAbout from '../LandingAbout/LandingAbout';
import WPlans from '../WorkoutPlans/WorkoutPlan';
import LGallery from '../LandingGallery/LGallery';
import Form from '../ContactForm/Form';
import Social from '../Socials/Social';
import Banner from '../Banner/Banner';
import Overlay from '../Overlay/Overlay';
import Newsletter from '../Newsletter/Newsletter';
import MyService from '../MyServices/MyService';
import BlogPage from '../BlogPage/BlogPage';
import HomePageBlogBanner from '../HomePageBlogBanner/HomePageBlogBanner';
function HomePage(){
    return(
        <div className='Main-Page'>
            <Cover></Cover>
            <MyService></MyService>
            <LAbout></LAbout>
            
            <WPlans></WPlans>
            <HomePageBlogBanner></HomePageBlogBanner>
            <BlogPage></BlogPage>
            <LGallery></LGallery>
           
            <Form id="Form"></Form>
            <Social></Social>
            
            <Newsletter></Newsletter>
            
        </div>
    )
}
export default HomePage