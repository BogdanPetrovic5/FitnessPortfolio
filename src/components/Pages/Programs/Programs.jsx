import WPlans from '../../ReusableComponents/WorkoutPlans/WorkoutPlan';
import MyService from '../../ReusableComponents/MyServices/MyService';
import ServicesWorkoutPlans from "../../ReusableComponents/ServicesWorkoutPlans/ServicesWorkoutPlans"
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
import Form from '../../ReusableComponents/ContactForm/Form';

import { useForm, ValidationError } from '@formspree/react';
function Programs(){
    const scrollToContact = () =>{
        const specificSection = document.getElementById('Form');
        if (specificSection) {
            
            const offset = 100; 
            const offsetPosition = specificSection.offsetTop - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
      }
    const [state, handleSubmit] = useForm("myyrbkzk");
    if (state.succeeded) {
        alert("Poruka uspesno poslata!")
    }
    return(
        <div className='Programs-Container'>
            <div className='Banner'>
                <h1>
                    USLUGE 
                </h1>
            </div>
            <MyService/>
            <ServicesWorkoutPlans/>
            <div className='Custom-Trainings'>
                <div className='Custom-Trainings-Banner'>
                    <div className='Custom-Trainings-Title'>
                        <h1 className='Decoration-Titles'>Personalizovani Treninzi!</h1>
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
               
                <div className='Training-Form'>
                    <form className='Training-Form-Wrap' onSubmit={handleSubmit} action="https://formspree.io/f/myyrbkzk"
                    method="POST">
                        <div className='Name'>
                            <div>
                                <span>
                                    Ime
                                </span>
                                <input type='text' name='Ime'>
                                </input>
                            </div>
                            <div>
                                <span>
                                    Prezime
                                </span>
                                <input type='text' name='Prezime'>
                                </input>
                            </div>
                            
                        </div>
                        <div className='Personal-Info'>
                            <div>
                                <span>
                                    Pol
                                </span>
                                <select name="pol" id="fruits">
                                    <option value="apple">Muški</option>
                                    <option value="banana">Ženski</option>
                                    
                                </select>
                            </div>
                           
                            <div>
                                <span>
                                    Godine
                                </span>
                                <input type='number' name='Godine'>
                                </input>
                            </div>
                           
                            <div>
                                <span>
                                    Težina
                                </span>
                                <input type='number' name='Težina'>
                                </input>
                            </div>
                            
                            <div>
                                <span>
                                    Visina
                                </span>
                                <input type='number' name='Visina'>
                                </input>
                            </div>
                            
                        </div>
                        <div className='Creditentials'>
                            <div>
                             <span>
                                Email Adresa
                            </span>   
                
                            <input type='email' name='Email adresa'>
                            </input>
                            <ValidationError 
                                prefix="Email" 
                                field="email"
                                errors={state.errors}
                            />
                            </div>
                            <div>
                            <span>
                                Broj telefona
                            </span>
                            <input type='number' name='Broj telefona'>
                            </input>
                            </div>
                            
                        </div>
                        <div className='Training-Goals'>
                            <span>
                                Željeni broj treninga u nedelji?
                            </span>
                            <input type='text' name='Preferirani Broj treninga'>
                            </input>
                            <span>
                                Ciljevi vezani za trening?
                            </span>
                            <textarea type='text' name='Cilj'>

                            </textarea>
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <button type="submit">
                            Pošalji!
                        </button>
                    </form>
                </div>
            </div>
            <div className='Workout-Types' id='Workout-Details'>
                <div className='Workout-Types-Description'>
                    <div className='Workout-Types-Title'>
                        <h1 className='Decoration-Titles'>Tipovi planova</h1>
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
                        <h1 className='Decoration-Titles'>Online i Personalni/Polu personalni Treninzi</h1>
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
                        <h1 className='Decoration-Titles'>
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
                <button onClick={()=>scrollToContact()}>
                    Kontaktiraj me!
                </button>
            </div>
            <Form/>
            <div className='Contact-Banner-Container'>
                <div className='Contact-Banner-Title'>
                    <h1 >
                        Kreni da radiš sa mnom!
                    </h1>
                    <button onClick={()=>scrollToContact()}>
                        Kontaktiraj me!
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Programs;