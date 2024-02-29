import React from "react";
import './Banner.css'
import Books from './open-book.png'
import Foods from './cutlery.png'
import Gym from './dumbell.png'
function Banner(){
    return(
        <div className="Banner-Home-Page">
            <div className="Banner-Home-Page-Content">
                <h1>MOJI STAVOVI</h1>
                <h2>KROZ PAKAO I PONORE</h2>
                <div className="Banner-List">
                    <div className="List-Item" data-aos="fade-up" data-aos-duration="500" data-aos-delay = "200">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            LIFT HEAVY
                        </h1>
                        <img src={Gym}>
                        </img>
                    </div>
                    <div className="List-Item" data-aos="fade-up" data-aos-duration="500" data-aos-delay = "150">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            EAT HEALTHY
                        </h1>
                        <img src={Foods}>
                        </img>
                    </div>
                    <div className="List-Item" data-aos="fade-up" data-aos-duration="500" data-aos-delay = "100">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <h1>
                            EDUCATE HEAVY
                        </h1>
                        <img src={Books}>
                        </img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;