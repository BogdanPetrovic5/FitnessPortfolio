import React, { useEffect } from "react"
import './MyService.css'
import Weight from './images/weight1.png'
import Rehab from './images/rehab.png'
import Food from './images/health1.png'
import Online from './images/online.png'
import Decoration from './images/Decorations.png'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
function MyService(){
    const {t} = useTranslation();
    const scrollToContact = () =>{
        const specificSection = document.getElementById('My-Services');
        if (specificSection) {
            
           
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
      }
      useEffect(()=>{
        
      })
    return (
    <section className="MyServices-Container" data-aos="fade-up" id="My-Services">
      <header className="MyServices-Container-Banner">
        <h1 className="Absolute">{t('myServices.banner.absoluteTitle')}</h1>

        <div className="MyServices-Container-Title">
          <div data-aos="fade-right" />
          <h2 data-aos="fade-right" className="Decoration-Titles">{t('myServices.banner.sectionTitle')}</h2>
        </div>

        <div className="MyServices-Container-Title-h1" data-aos="fade-left">
          <h3 className="AllTitles">
            {t('myServices.banner.mainTitle')} <span>{t('myServices.banner.mainTitleSpan')}</span>
          </h3>
          <img src={Decoration} alt="Dekoracija" />
          <p> {t('myServices.banner.description')}</p>
          <Link to="/programs">
            {t('myServices.banner.button')}
          </Link>
        </div>
      </header>

      <main className="MyServices-Wrap">
        <section className="MyServices-Wrap-First-Two Wrappers">
          <article className="MyServices-Card Personal-Training" data-aos="fade-right" data-aos-offset="250">
            <h4>{t('myServices.cards.training.title')}</h4>
            <img src={Weight} alt={t('myServices.cards.training.alt')} />
            <p>{t('myServices.cards.training.description')}</p>
          </article>

          <article className="MyServices-Card Rehab" data-aos="fade-left" data-aos-offset="250">
            <h4>{t('myServices.cards.rehab.title')}</h4>
            <img src={Rehab} alt={t('myServices.cards.rehab.alt')} />
            <p>{t('myServices.cards.rehab.description')}</p>
          </article>
        </section>

        <section className="MyServices-Wrap-First-Two Wrappers">
          <article className="MyServices-Card Online" data-aos="fade-right" data-aos-offset="250">
            <h4>{t('myServices.cards.online.title')}</h4>
            <img src={Online} alt={t('myServices.cards.online.alt')} />
            <p>{t('myServices.cards.online.description')}</p>
          </article>

          <article className="MyServices-Card Nutrition" data-aos="fade-left" data-aos-offset="250">
            <h4>{t('myServices.cards.nutrition.title')}</h4>
            <img src={Food} alt={t('myServices.cards.nutrition.alt')} />
            <p>{t('myServices.cards.nutrition.description')}</p>
          </article>
        </section>
      </main>
    </section>
    )

}
export default MyService