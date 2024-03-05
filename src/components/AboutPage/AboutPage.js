import './AboutPage.css'
import React from 'react'
import HSDjole from './DjoleSrednja.jpg';
import HighSchool from './highschool.png'
import UNIDjole from './UNIDjole.jpg'
import MortarBoard from './mortarboard.png'
import WPlans from '../WorkoutPlans/WorkoutPlan';
import LGallery from '../LandingGallery/LGallery';
import Banner from '../Banner/Banner';
import MobileGallery from '../MobileGallery/MobileGallery';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import DjoleAbout1 from './DjoleAbout1.jpg'
import DjoleAbout2 from './DjoleAbout2.jpg'
import DjoleAbout3 from './DjoleAbout3.jpg'
import bg from './bg.png'
import Social from '../Socials/Social';
function AboutPage(){
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const parameterValue = searchParams.get('param');
  

      
    
    useEffect(() => {
        const specificSection = document.getElementById('Gallery');
        if (specificSection && parameterValue === "Gallery") {
            console.log("ASDSDA")
            
            const offsetPosition = specificSection.offsetTop;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }else{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }, []);
    return (
     <div className='About-Page-Container' style={{ backgroundImage: `url(${bg})` }} >
        <div className='Banner'  style={{ backgroundImage: `url(https://assets-global.website-files.com/64db59a28003b5f97686e7b6/64db59ddbcd0c6c9b18db041_pattern02.png)` }} >
            <div className='Banner-Cover'>

            </div>
            <h1 >ABOUT ME!</h1>
        </div>
             
        <div className='About-Page-Bio'>
            <div className='About-Page-Bio-Paragraph'>
                <div className="About-Paragraph-Desktop-Title">
                        <div>

                        </div>
                        <h1 data-aos="fade-left" >ABOUT ME</h1>
                </div>
                <h1 className="About-Paragraph-Desktop-h1" data-aos="fade-right">
                        Your Personal Trainer and Physical Therapist
                </h1>
                <p className='Main-Paragraph'>
                    <p data-aos="fade-right" data-aos-duration='800' data-aos-offset = '-50'>There are many variations of passages of Lorem Ipsum available, but the majority have </p> <p data-aos="fade-left"  data-aos-duration='800' data-aos-offset = '-50'>suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> <p data-aos="fade-right"  data-aos-duration='800' data-aos-offset = '-50'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden</p> <p data-aos="fade-left"  data-aos-duration='800' data-aos-offset = '-50'>in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n</p>
                </p> 
                
            </div>
            
            <div className='About-Page-Bio-Image About-Page-Dekstop'>
                
                <img src='assets/DjoleAbout.jpg'></img>
            </div>
        </div>
        
        <div className='Education-Content'>
            <div className='Education-Content-Uni'>
                <div className='Education-Content-Paragraph'>
                    <div className="Education-Content-Paragraph-Title">
                        <div>

                        </div>
                        <h1>EDUCATION</h1>
                    </div>
                    <h1 className="Education-Content-Paragraph-Title-h1">
                        My Late Years Of Being Djole
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
                    </p>
                </div>
                
                <div className='Education-Content-Image About-Page-Dekstop'>
                    <img className='framed' src={UNIDjole}></img>
                </div>
            </div>
        </div>
        <Banner></Banner>   
        <Social></Social>
        <LGallery ></LGallery>
        <MobileGallery className="Mobile-Gallery-Section"></MobileGallery>
        <div className='Banner-Goal' >
            <h1>
                MY MINDSET
            </h1>
        </div>
        <div className='My-Goal'>
            <h1 data-aos="fade-down"
                data-aos-offset="150">
                POKRET JE LEK
            </h1>
            <h1 data-aos="fade-down"
                data-aos-offset="150" >
                REZULTATI ZAHTEVAJU DUGOROČNU UPORNOST
            </h1>
            <h1 data-aos="fade-down"
                data-aos-offset="150">
                ODRICANJEM DO CILJA
            </h1>
           
            <h1 data-aos="fade-down"
               data-aos-offset="150" >
               SITNE NAVIKE VELIKI USPESI
            </h1>
            <h1 data-aos="fade-down"
                data-aos-offset="150">
                SVE JE NA TEBI
            </h1>
            <h1 data-aos="fade-down"
               data-aos-offset="150" >
               SITNE NAVIKE VELIKI USPESI
            </h1>
            <h1 data-aos="fade-down"
               data-aos-offset="150" >
               SVE JE TVOJA ODGOVORNOST
            </h1>
        </div>
        
     </div>   
    )
}
export default AboutPage