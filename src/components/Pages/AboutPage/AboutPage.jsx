import './AboutPage.css'
import React from 'react'
import Faq from '../../ReusableComponents/FAQ/Faq';
import LGallery from '../../ReusableComponents/LandingGallery/LGallery';
import Banner from '../../ReusableComponents/Banner/Banner';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import Feedback from '../../ReusableComponents/ClientsFeedback/Feedback';
import MyService from '../../ReusableComponents/MyServices/MyService';
import Form from '../../ReusableComponents/ContactForm/Form';
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
     <div className='About-Page-Container' >
        <div className='Banner'  style={{ backgroundImage: `url(https://assets-global.website-files.com/64db59a28003b5f97686e7b6/64db59ddbcd0c6c9b18db041_pattern02.png)` }} >
            <div className='Banner-Cover'>

            </div>
            <h1 >O MENI!</h1>
        </div>
        <MyService></MyService>    
        <div className='About-Page-Bio' data-aos='fade-up'>
            <div className='About-Page-Bio-Paragraph'>
                <div className="About-Paragraph-Desktop-Title">
                        <div data-aos="fade-left" data-aos-duration="900">

                        </div>
                        <h1 data-aos="fade-left" data-aos-duration = "800" className="Decoration-Titles">About me</h1>
                </div>
                <h1 className="About-Paragraph-Desktop-h1 AllTitles" data-aos="fade-right" data-aos-duration = "800">
                        Tvoj Personalni Trener I <span>Fizioterapeut</span>
                </h1>
                <p data-aos="fade-left" >
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n

                </p>
                
            </div>
            
            <div className='About-Page-Bio-Image'>
                <div className="About-Page-Bio-Image-First-Section">
                    <img src="assets/DjoleAbout.jpg">
                    </img>
                    <img src="assets/DjoleAbout.jpg">
                    </img>
                </div>
                <div className="About-Page-Bio-Image-Second-Section">
                    <img src="assets/DjoleAbout.jpg">
                    </img>
                    <img src="assets/DjoleAbout.jpg">
                    </img>
                </div>
            </div>
        </div>
        
        <div className='Education-Content' data-aos='fade-up' data-aos-duration="900">
    
                <div className='Education-Content-Paragraph'>
                    <div className="Education-Content-Paragraph-Title">
                        <div data-aos="fade-right" data-aos-duration = "800">

                        </div>
                        <h1 data-aos="fade-right" data-aos-duration = "800" className="Decoration-Titles">Edukacija</h1>
                    </div>
                    <h1 className="Education-Content-Paragraph-Title-h1 AllTitles" data-aos="fade-left" data-aos-duration = "800">
                        Moje Kasnije Godine <span>Bivstovanja</span>
                    </h1>
                    <p data-aos="fade-right" data-aos-duration = "800">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
                    </p>
                </div>
                
            
            
        </div>
        <Banner></Banner>   
        
        <Feedback></Feedback>
        
      
        
        <LGallery ></LGallery>
        
        <Faq></Faq>
        <Form></Form>
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
    )
}
export default AboutPage