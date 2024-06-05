import React, { useEffect } from "react"
import './MyService.css'
import Weight from './images/weight1.png'
import Rehab from './images/rehab.png'
import Food from './images/health1.png'
import Online from './images/online.png'
import Decoration from './images/Decorations.png'
import { Link } from "react-router-dom"
function MyService(){
    const scrollToContact = () =>{
        const specificSection = document.getElementById('My-Services');
        if (specificSection) {
            
           
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
      }
      useEffect(()=>{
        scrollToContact()
      })
    return (
    <div className="MyServices-Container"  data-aos = 'fade-up' id='My-Services'>
            <div className="MyServices-Container-Banner">
                <h1 className="Absolute" >USLUGE</h1>
                <div className="MyServices-Container-Title ">
                    <div data-aos = 'fade-right'>

                    </div>
                    <h1  data-aos = 'fade-right' className="Decoration-Titles">
                        Moje usluge
                    </h1>
                </div>
                <div className="MyServices-Container-Title-h1" data-aos = 'fade-left'>
                    <h1 className="AllTitles">Izaberi uslugu koja ti <span>odgovara! </span></h1>
                <img src={Decoration}></img>
                <p >Lorem Ipsum is simply dummy text of printing and typesetting industry.</p>
                <button>
                    <Link to='/programs'>Pogledaj više</Link>
                </button>
               </div>
              
            </div>
            <div className="MyServices-Wrap">
                <div className="MyServices-Wrap-First-Two Wrappers">
                    <div className="MyServices-Card Personal-Training" data-aos = 'fade-right' data-aos-offset = "250">
                        <h1>
                            planovi treninga
                        </h1>
                        <img src={Weight}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="MyServices-Card Rehab" data-aos = 'fade-left' data-aos-offset = "250">
                        <h1>
                            rehabilitacija
                        </h1>
                        <img src={Rehab}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                </div>
                <div className="MyServices-Wrap-First-Two Wrappers">
                    <div className="MyServices-Card Online"  data-aos = 'fade-right' data-aos-offset = "250">
                        <h1>
                            online personalni treninzi
                        </h1>
                        <img src={Online}></img>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
                    </div>
                    <div className="MyServices-Card Nutrition" data-aos = 'fade-left' data-aos-offset = "250">
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