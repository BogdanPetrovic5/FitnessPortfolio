import React from 'react'
import './HomePage.css'

import Cover from '../Cover/Cover';
import LAbout from '../LandingAbout/LandingAbout';
import WPlans from '../WorkoutPlans/WorkoutPlan';
import LGallery from '../LandingGallery/LGallery';
import Form from '../ContactForm/Form';
import Social from '../Socials/Social';
function HomePage(){
    return(
        <div className='Main-Page'>
            <Cover></Cover>
            <LAbout></LAbout>
            <WPlans></WPlans>
            <LGallery></LGallery>
            <Social></Social>
            <Form id="Form"></Form>
        </div>
    )
}
export default HomePage