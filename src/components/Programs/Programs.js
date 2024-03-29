import WPlans from '../WorkoutPlans/WorkoutPlan';
import MyService from '../MyServices/MyService';
import ServicesWorkoutPlans from "../ServicesWorkoutPlans/ServicesWorkoutPlans"
import './Programs.css'
import React from 'react';
import Decoration from './images/Decorations.png'
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
        </div>
    )
}
export default Programs;