import React from "react";
import './Banner.css'
import Books from './education.png'
import Foods from './health.png'
import Gym from './dumbell1.png'
function Banner(){
    return(
        <div className="Banner-Home-Page" style={{ backgroundImage: `url(https://assets-global.website-files.com/64db59a28003b5f97686e7b6/64db59ddbcd0c6c9b18db041_pattern02.png)` }}>
            <div className="Banner-Home-Page-Content" >
                <div className='Banner-Home-Page-Content-Title'>
                    <div>

                    </div>
                    <h2>Moji stavovi</h2>
                </div>
                <div className="Banner-Home-Page-Content-Description">
                    <h1>
                        Kroz pakao i ponore
                    </h1>
                </div>
                <div className="Banner-List">
                    {/* <div className="List-Item" data-aos="fade-up" data-aos-duration="500">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            LIFT HEAVY
                        </h1>
                        <img src={Gym}>
                        </img>
                    </div>
                    <div className="List-Item" data-aos="fade-up" data-aos-duration="500" >
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            EAT HEALTHY
                        </h1>
                        <img src={Foods}>
                        </img>
                    </div>
                    <div className="List-Item" data-aos="fade-up" data-aos-duration="500" >
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            EDUCATE HEAVY
                        </h1>
                        <img src={Books}>
                        </img>
                    </div> */}
                    <div className="List-Card Lift" data-aos ="fade-down" data-aos-duration = '800' data-aos-delay = "100">
                        <h1>
                            Treniraj jako
                        </h1>
                        <img src={Gym}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="List-Card Eat" data-aos ="fade-down" data-aos-duration = '800' data-aos-delay = "150"> 
                        <h1>
                            Ne budi rob ishrane
                        </h1>
                        <img src={Foods}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="List-Card Educate" data-aos ="fade-down" data-aos-duration = '800' data-aos-delay = "200">
                        <h1>
                            Uci stalno
                        </h1>
                        <img src={Books}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;