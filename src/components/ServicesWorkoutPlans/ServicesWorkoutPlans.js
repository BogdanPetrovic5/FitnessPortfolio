import { useState } from 'react'
import './ServicesWorkoutPlans.css'
import Decoration from './images/Decorations.png'
function ServicesWorkoutPlans(){
    const [strengthCheck, setStrengthActive] = useState(true)
    const [hypertrophyCheck, setHypertrophyActive] = useState(false)
    const [mixCheck, setMixActive] = useState(false)

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
    return(
        
        <div className="Workout-Plans-Container" data-aos="fade-up">
            <div className="Workout-Plans-Container-Banner">
                <h1 className='Absolute'>
                        PLANOVI
                </h1>
                <div className="Workout-Plans-Container-Title">
                    
                    <div>

                    </div>
                    <h1 className='Decoration-Titles'>
                        PLANOVI TRENINGA
                    </h1>
                </div>
                <h1 className="Workout-Plans-Container-Title-h1">
                   Izaberi ono sto ti odgovora!
                </h1>
                <img src={Decoration}></img>
                <p>Detalji o znacenjima planova pogledaj <span onClick={()=>scrollToDetails()}>dole!</span></p>
            </div>
            <div className='Workout-Plans-Container-Wrap'>
                <div className='Workout-Plans-Selection'>
                    <li className={strengthCheck ? 'Selected' : ''} onClick={()=>handleStrenght()}>
                        SNAGA
                    </li>
                    <li className={hypertrophyCheck ? 'Selected' : ''} onClick={()=>handleHypertrophy()}>
                        HIPERTROFIJA
                    </li>
                    <li className={mixCheck ? 'Selected' : ''} onClick={()=>handleMix()}>
                        MIX
                    </li>
                </div>
                {strengthCheck && ( <div className='Workout-Plans-Items'>
                    <div className='Workout-Plan-Basic Item'>
                        <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Standardni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                39.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                        
                    </div>
                    <div className='Workout-Plan-Advanced Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Napredni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                39.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                    <div className='Workout-Plan-Premium Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Premium Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                39.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                </div>
                )}
                {hypertrophyCheck && ( <div className='Workout-Plans-Items'>
                    <div className='Workout-Plan-Basic Item'>
                        <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Standardni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                29.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                        
                    </div>
                    <div className='Workout-Plan-Advanced Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Napredni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                39.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                    <div className='Workout-Plan-Premium Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Premijum Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                59.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                </div>
                )}
                {mixCheck && ( <div className='Workout-Plans-Items'>
                    <div className='Workout-Plan-Basic Item'>
                        <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Standardni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                69.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                        
                    </div>
                    <div className='Workout-Plan-Advanced Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Napredni Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                79.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                    <div className='Workout-Plan-Premium Item'>
                    <div className='Item-Description'>
                            <h1 className='Item-Title'>
                                Premijum Plan
                            </h1>
                        
                            <p>
                                Ovaj plan obuhvata 3 treinnga nedeljno, lorem ispum is the only way to create something not unique but unique
                            </p>
                            <div className='Horisontal-Line'></div>
                            <h1 className='Item-Price'>
                                89.0&euro;/ Mesec
                            </h1>
                            <button>
                                NARUČI
                            </button>
                        </div>
                    </div>
                </div>
                )}
               
            </div>
        </div>
    )
}
export default ServicesWorkoutPlans