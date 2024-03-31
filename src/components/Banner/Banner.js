import React from "react";
import './Banner.css'
import Food from './images/diet.png'
import Heatlh from './images/heart-beat.png'
import Education from './images/graduation-cap.png'
import Gym from './images/weight.png'
function Banner(){
    return(
        <div className="Banner-Container">
            <div className="Banner-Container-Description">
               <div className="Banner-Container-Title">
                    <h1>
                        Moji stavovi
                    </h1>
               </div>
                <h1 className="Banner-Container-Title-h1"> 
                    Cime se ja vodim u <span>zivotu?</span>  
                </h1>
            </div>
            <div className="Banner-Container-Card-Wrap">
                <div className="Banner-First-Two-Cards">
                    <div className="Banner-Card">
                        <img src={Heatlh}>
                        
                        </img>
                        <h1>
                           Zdravlje 
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of printing and typesetting industry typesetting industry.
                        </p>
                    </div>
                    <div className="Banner-Card">
                    <img src={Education}>
                        
                        </img>
                        <h1>
                           Edukacija 
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of printing and typesetting industry typesetting industry.
                        </p>
                    </div>
                </div>
                <div className="Banner-Last-Two-Cards">
                    <div className="Banner-Card">
                        <img src={Gym}>
                        
                        </img>
                        <h1>
                            Treniraj najjace  
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of printing and typesetting industry typesetting industry.
                        </p>
                    </div>
                    <div className="Banner-Card">
                    <img src={Food}>
                        
                        </img>
                        <h1>
                           Jedi najdobro
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of printing and typesetting industry typesetting industry.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;