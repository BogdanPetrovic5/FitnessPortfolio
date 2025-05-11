import "./LandingAbout.css"
import { useState } from 'react';
import { useEffect } from 'react';
import Decoration from './Images/Decorations.png'
import { Link, useLocation  } from 'react-router-dom';
import { useTranslation } from "react-i18next";
function LAbout(){
  const [imageUrl, setImageUrl] = useState('/assets/DjoleAbout3.png');
  const {t} = useTranslation();
  useEffect(() => {
    const handleResize = () => {
      setImageUrl(window.innerWidth < 1023 ? '/assets/DjoleAbout3.png' : '');
    };

   
    handleResize();

 
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);
    return( 
          <section className='About-Page-Bio' data-aos='fade-up' aria-labelledby="about-section-title">
            <div className='About-Page-Bio-Paragraph'>
              <header>
                <h1 className="Absolute">{t('about.sectionTitle')}</h1>
                <div className="About-Paragraph-Desktop-Title">
                          <div >

                          </div>
                          <h2 className="Decoration-Titles">{t('about.title')}</h2>
                </div>
                <h3 className="About-Paragraph-Desktop-h1 AllTitles">
                          {t('about.subtitle.title')} <span>{t('about.subtitle.span')}</span>
                </h3>
              </header>
                
              <img src={Decoration} alt="Decorative image" role="presentation" ></img>
              <p>
                {t('about.paragraph')}
              </p>
              <Link className='button-learn-more-about-section' to="/about" aria-label="Learn more about Djordje Personal Trainer and Physiotherapist!"> 
                 {t('about.button')}
              </Link>
                
            </div>
            
            <aside className='About-Page-Bio-Image' aria-label="Gallery of Djordje">
                <div className="About-Page-Bio-Image-First-Section">
                    <img alt="Djordje, certified personal trainer and physiotherapist" src="assets/DjoleAbout.jpg" data-aos="fade-down-right" data-aos-duration="900" loading="lazy">
                    </img>
                    <img alt="Djordje in training session" src="assets/DjoleAbout.jpg" data-aos="fade-up-right" data-aos-duration="900" loading="lazy">
                    </img>
                </div>
                <div className="About-Page-Bio-Image-Second-Section">
                    <img alt="Djordje demonstrating posture technique" src="assets/DjoleAbout.jpg" data-aos="fade-down-left" data-aos-duration="900" loading="lazy">
                    </img>
                    <img  alt="Djordje working with a client" src="assets/DjoleAbout.jpg" data-aos="fade-up-left" data-aos-duration="900" loading="lazy">
                    </img>
                </div>
            </aside>
          </section>  
    )
}
export default LAbout