import WPlans from '../WorkoutPlans/WorkoutPlan';
import MyService from '../MyServices/MyService';
import './Programs.css'
import React from 'react';

function Programs(){
    return(
        <div className='Programs-Container'>
            <div className='Banner'>
                <h1>
                    PROGRAMS
                </h1>
            </div>
            <MyService></MyService>
            <WPlans></WPlans>
        </div>
    )
}
export default Programs;