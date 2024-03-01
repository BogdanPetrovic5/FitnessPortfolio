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
function HomePage(){
    return(
        <div className='Main-Page'>
            <Cover></Cover>
            <Banner></Banner>
            <LAbout></LAbout>
            <WPlans></WPlans>
            <LGallery></LGallery>
            <Social></Social>
            <Form id="Form"></Form>
            <Newsletter></Newsletter>
            
        </div>
    )
}
export default HomePage