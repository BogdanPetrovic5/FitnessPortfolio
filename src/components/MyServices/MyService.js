import React from "react"
import './MyService.css'
import Weight from './weight1.png'
import Rehab from './rehab.png'
import Food from './health1.png'
import Online from './online.png'
function MyService(){
    return (
        <div className="MyServices-Container"  style={{ backgroundImage: `url(https://assets-global.website-files.com/64db59a28003b5f97686e7b6/64db59ddbcd0c6c9b18db041_pattern02.png)` }}>
            <div className="MyServices-Container-Banner">
                <div className="MyServices-Container-Title">
                    <div>

                    </div>
                    <h2>
                        Moje usluge
                    </h2>
                </div>
               <div className="MyServices-Container-Title-h1">
                <h1>Izaberi uslugu koja ti <span>odgovara! </span></h1>
                    <button>
                    POGLEDAJ VIŠE
                </button>
               </div>
              
            </div>
            <div className="MyServices-Wrap">
                <div className="MyServices-Wrap-First-Two Wrappers">
                    <div className="MyServices-Card Personal-Training" >
                        <h1>
                            planovi treninga
                        </h1>
                        <img src={Weight}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="MyServices-Card Rehab">
                        <h1>
                            rehabilitacija
                        </h1>
                        <img src={Rehab}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                </div>
                <div className="MyServices-Wrap-First-Two Wrappers">
                    <div className="MyServices-Card Nutrition">
                        <h1>
                            online personalni treninzi
                        </h1>
                        <img src={Online}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="MyServices-Card Nutrition">
                        <h1>
                            ishrana
                        </h1>
                        <img src={Food}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                </div>
                
            </div>
        </div>
    )

}
export default MyService