import WPlans from '../WorkoutPlans/WorkoutPlan';
import MyService from '../MyServices/MyService';
import ServicesWorkoutPlans from "../ServicesWorkoutPlans/ServicesWorkoutPlans"
import './Programs.css'
import React from 'react';
import Decoration from './images/Decorations.png'
import BB from './images/BB.jpg'
import PL from './images/PL.jpg'
import PB from './images/PB.jpg'
import Yes from './images/check-mark.png'
import No from './images/delete-cross.png'
import BP from './images/Benchpresss.jpg'
import DL from './images/Deadlift.jpg'
import SQ from './images/Squat.jpg'
import Form from '../ContactForm/Form';
function Programs(){
    return(
        <div className='Programs-Container'>
            <div className='Banner'>
                <h1>
                    USLUGE 
                </h1>
               
            </div>
            {/* <div className='Programs-Content'>
                <h1>
                    UNDER THE CONSTRUCTION
                </h1>
            </div> */}
            <MyService></MyService>
           
            <ServicesWorkoutPlans>

            </ServicesWorkoutPlans>
            <div className='Custom-Trainings'>
                <div className='Custom-Trainings-Banner'>
                    <div className='Custom-Trainings-Title'>
                        <h1>Personalizovani Treninzi!</h1>
                    </div>
                    <h1 className='Custom-Trainings-Title-h1'>
                        Zelis li plan kereiran shodno tvojim zeljama i mogucnostima? <br></br>
                        <span>Popuni formu ispod!</span>
                    </h1>
                    <img src={Decoration}></img>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </p>
                </div>
               
                <iframe id="JotFormIFrame-240875380213050" title="Personalizovani plan. Popuni formu" onLoad={() => window.parent.scrollTo(0,0)} allowtransparency="true" allow="geolocation; microphone; camera; fullscreen" src="https://form.jotform.com/240875380213050" frameBorder="0" style={{width:'40%', height: '1000px', border: 'none' }}  scrolling="no"></iframe>
                <script src='https://form.jotform.com/s/umd/latest/for-form-embed-handler.js'></script>
                <script dangerouslySetInnerHTML={{ __html: `window.jotformEmbedHandler("iframe[id='JotFormIFrame-240875380213050'", "https://form.jotform.com/")` }}></script>
                <div className='Above'>

                </div>
            </div>
            <div className='Workout-Types' id='Workout-Details'>
                <div className='Workout-Types-Description'>
                    <div className='Workout-Types-Title'>
                        <h1>Tipovi planova</h1>
                    </div>
                    <h1 className='Workout-Types-Title-h1'>
                        Ne znas sta koji plan znaci?<span> Pogledaj detaljnije!</span> 
                    </h1>
                </div>
                <div className='Workout-Types-Card-Wrap' >
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${BB})` }} id='First-Workout-Card'>
                        <h1>
                            Bodybuilding
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PB})` }} id='Second-Workout-Card'>
                    <h1>
                            Powerbuilding
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                    <div className='Workout-Type-Card' style={{ backgroundImage: `url(${PL})` }} id='Third-Workout-Card'>
                        <h1>
                            Powerlifting
                        </h1>
                        <div className='Workout-Card-Descirption'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Personal-Trainings-Container'>
                <div className='Personal-Trainings-Banner'>
                    <div className='Personal-Trainings-Title'>
                        <h1>Online i Personalni/Polu personalni Treninzi</h1>
                    </div>
                    <h1 className='Personal-Trainings-Title-h1'>
                        Ocekivanja od rada sa mnom <span> 1 na 1!</span>
                    </h1>
                </div>
                <div className='Personal-Trainings-Wrap'>
                    <div className='Personal-Trainings-Card'>
                        <h1 className='Personal-Trainings-Card-Title'>
                           Online-Trenizni 
                        </h1>
                        <div>
                            <li>
                                <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={No}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={No}></img>Lorem ipsum
                            </li>
                        </div>
                        <div className='Card-HR'>

                        </div>
                        <h1 className='Personal-Trainings-Card-Price'>
                            100&euro;
                        </h1>
                        <button>
                        POČNI
                        </button>
                    </div>
                    <div className='Personal-Trainings-Card'>
                        <h1 className='Personal-Trainings-Card-Title'>
                           Polu-Personalni Treninzi 
                        </h1>
                        <div>
                        <li>
                                <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                        </div>
                        <div className='Card-HR'>

                        </div>
                        <h1 className='Personal-Trainings-Card-Price'>
                            150&euro;
                        </h1>
                        <button>
                        POČNI
                        </button>
                    </div>
                    <div className='Personal-Trainings-Card'>
                        <h1 className='Personal-Trainings-Card-Title'>
                           Personalni Treninzi 
                        </h1>
                        <div>
                        <li>
                                <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                            <li>
                            <img src={Yes}></img>Lorem ipsum
                            </li>
                        </div>
                        <div className='Card-HR'>

                        </div>
                        <h1 className='Personal-Trainings-Card-Price'>
                            250&euro;
                        </h1>
                        <button>
                        POČNI
                        </button>
                    </div>
                </div>
            </div>
            <div className='Rehab-Container'>
                <div className='Rehab-Banner'>
                    <div className='Rehab-Banner-Title'>
                        <h1>
                            Rehabilitacija
                        </h1>
                    </div>
                    <h1 className='Rehab-Banner-Title-h1'> 
                        Imas bolove? I zelis da zivis normalno? <span>Kontaktiraj me!</span> 
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </p>
                </div>
                <div className='Rehab-Wrap'>
                    <div className='Rehab-Shoulder Rehab-Card' style={{backgroundImage:`url(${BP})`}}>
                       <div className='Rehab-Description'>
                            <h1>
                                Želiš li opet da radis Bench Press?
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                       </div>
                    </div>
                     <div className='Rehab-Back Rehab-Card'  style={{backgroundImage:`url(${DL})`}}>
                        <div className='Rehab-Description'>
                            <h1>
                                Želiš li opet da radis Mrtva Dizanja?
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                    </div>
                     <div className='Rehab-Knees Rehab-Card'  style={{backgroundImage:`url(${SQ})`}}>
                        <div className='Rehab-Description'>
                            <h1>
                                Želiš li opet da radis Čučanj?
                            </h1>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                        </div>
                            
                    </div>
                </div>
                <button>
                Kontaktiraj me!
                </button>
            </div>
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
export default Programs;