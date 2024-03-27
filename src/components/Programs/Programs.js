import WPlans from '../WorkoutPlans/WorkoutPlan';
import MyService from '../MyServices/MyService';
import ServicesWorkoutPlans from "../ServicesWorkoutPlans/ServicesWorkoutPlans"
import './Programs.css'
import React from 'react';

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
        </div>
    )
}
export default Programs;