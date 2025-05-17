   import { useState } from 'react'
import './ServicesWorkoutPlans.css'
import Decoration from './images/Decorations.png'
import { useTranslation } from 'react-i18next'
function ServicesWorkoutPlans(){
    const [strengthCheck, setStrengthActive] = useState(true)
    const [hypertrophyCheck, setHypertrophyActive] = useState(false)
    const [mixCheck, setMixActive] = useState(false)
    const {t} = useTranslation();
    const handleStrenght = () =>{
        setStrengthActive(true)
        setHypertrophyActive(false)
        setMixActive(false)
    }
    const handleHypertrophy = () =>{
        setStrengthActive(false)
        setHypertrophyActive(true)
        setMixActive(false)
    }
    const handleMix = () =>{
        setStrengthActive(false)
        setHypertrophyActive(false)
        setMixActive(true)
    }
    const scrollToDetails = () =>{
        const specifiLocation = document.getElementById('Workout-Details')
        const offset = 200;
        const offsetPosition = specifiLocation.offsetTop - offset
        window.scrollTo({
            top: offsetPosition,
            behavior:'smooth',
        })
    }

    const renderPlans = (type) => (
        <>
            <article className='Workout-Plan-Basic Item'>
                <div className='Item-Description'>
                    <h3 className='Item-Title'>Standard Plan</h3>
                    <p>
                        This plan includes 3 weekly training sessions – ideal for those looking to establish consistency and build strength.
                    </p>
                    <div className='Horisontal-Line'></div>
                    <h4 className='Item-Price'>{t(`${type}.standard.price`)}</h4>
                    <button aria-label={`Order Standard ${type} Plan`}>ORDER</button>
                </div>
            </article>
            <article className='Workout-Plan-Advanced Item'>
                <div className='Item-Description'>
                    <h3 className='Item-Title'>Advanced Plan</h3>
                    <p>
                        Get 3 intense workouts per week tailored to advanced lifters with progressive overload strategies.
                    </p>
                    <div className='Horisontal-Line'></div>
                    <h4 className='Item-Price'>{t(`${type}.advanced.price`)}</h4>
                    <button aria-label={`Order Advanced ${type} Plan`}>ORDER</button>
                </div>
            </article>
            <article className='Workout-Plan-Premium Item'>
                <div className='Item-Description'>
                    <h3 className='Item-Title'>Premium Plan</h3>
                    <p>
                        Includes 3 custom workouts per week, check-ins, and full guidance to hit peak performance.
                    </p>
                    <div className='Horisontal-Line'></div>
                    <h4 className='Item-Price'>{t(`${type}.premium.price`)}</h4>
                    <button aria-label={`Order Premium ${type} Plan`}>ORDER</button>
                </div>
            </article>
        </>
    );
    return(
        
        <main className="Workout-Plans-Container" data-aos="fade-up">
            <header className="Workout-Plans-Container-Banner">
                <h1 className='Absolute'>
                    {t('workoutPlans.absoluteTitle')}
                </h1>
                <div className="Workout-Plans-Container-Title">
                    <h2 className='Decoration-Titles'>
                         {t('workoutPlans.title')}
                    </h2>
                </div>
                <h3 className="Workout-Plans-Container-Title-h1">
                    {t('workoutPlans.subTitle')}
                </h3>
                <img src={Decoration} alt="Workout decoration separator" />
                <p>
                    {t('workoutPlans.description.title')} <span onClick={() => scrollToDetails()} role="button" tabIndex={0}>{t('workoutPlans.description.span')}</span>!
                </p>
            </header>

            <section className='Workout-Plans-Container-Wrap'>
                <nav aria-label="Workout Plan Type Selection" className='Workout-Plans-Selection'>
                    <ul>
                        <li className={strengthCheck ? 'Selected' : ''} onClick={() => handleStrenght()} role="button">
                            Powerlifting
                        </li>
                        <li className={hypertrophyCheck ? 'Selected' : ''} onClick={() => handleHypertrophy()} role="button">
                            Bodybuilding
                        </li>
                        <li className={mixCheck ? 'Selected' : ''} onClick={() => handleMix()} role="button">
                            Powerbuilding
                        </li>
                    </ul>
                </nav>

                
                {strengthCheck && (
                    <section className='Workout-Plans-Items' aria-label="Powerlifting Plans">
                        {renderPlans('workoutPlans.offers.powerlifting')}
                    </section>
                )}
                {hypertrophyCheck && (
                    <section className='Workout-Plans-Items' aria-label="Bodybuilding Plans">
                        {renderPlans('workoutPlans.offers.bodybuilding')}
                    </section>
                )}
                {mixCheck && (
                    <section className='Workout-Plans-Items' aria-label="Powerbuilding Plans">
                        {renderPlans('workoutPlans.offers.powerbuilding')}
                    </section>
                )}
            </section>
        </main>
    )
}
export default ServicesWorkoutPlans