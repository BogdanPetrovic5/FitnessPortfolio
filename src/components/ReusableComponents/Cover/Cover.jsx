import React, { useState, useEffect, useRef } from 'react';
import './Cover.css'

import Ruka from './images/ruka.jpeg'
import Podlaktice from './images/podlaktica.jpg'
import Ledja from './images/ledja.jpg'
import CoverPhoto from './images/DjoleCover.png'
import IG from './images/instagram.png'
import TT from './images/tik-tok.png'
import FB from './images/facebook.png'
import { Link, useLocation  } from 'react-router-dom';
function Cover(){
       const [clients, setClients] = useState(0);
       const [patients, setPatients] = useState(0);
       const [experience, setExperience] = useState(0);

       const clientsRef = useRef(null);
       const patientsRef = useRef(null);
       const experienceRef = useRef(null);

       const animateNumber = (ref, setState, target, time) =>{
              const observer = new IntersectionObserver((entries, observer)=>{
                     if(ref.current){
                            entries.forEach(entry => {
                                   if(entry.isIntersecting){
                                          let count = 0;
                                       
                                          const interval = setInterval(()=>{
                                                 count++;
                                                 setState(count)
                                                 if(count == target) clearInterval(interval);
                                          },time)
                                          observer.unobserve(entry.target)
                                   }
                            })
                     }
                     
              }, {threshold: 0.5})
              observer.observe(ref.current);
       }
       useEffect(() => {
              animateNumber(clientsRef, setClients, 130, 20);
              animateNumber(patientsRef, setPatients, 1000, 2);
              animateNumber(experienceRef, setExperience, 4, 300);
       }, []);
       return(
              <header className='Cover' 
              style={{backgroundImage: `url('https://assets-global.website-files.com/65656d367ef06b6df2247915/657029cc9670bafa97954427_muscular-sportsman-building-biceps-with-dumbbell_73891bba2b5546b1bb17eef7d6d184ea%201.webp')`}}
              aria-label="Cover section showcasing personal trainer"
              >
                     <div className='Title' data-aos="fade-right" data-aos-duration="1500">
                            <div className='Cover-Title'>
                                   <div className='Title-Decoration' 
                                          data-aos-duration="1000">
                                          <div></div> 
                                          <h1>WITH DJOLE THROUGH HELL</h1>
                                   </div>
                                   <h2 className='Cover-Title-h1'>
                                   Lorem Ipsum is simply <span>dummy text</span> 
                                   </h2>
                                   <Link to="/about" aria-label="Learn more about Personal Trainer's journey"> 
                                          <button>LEARN MORE</button>
                                   </Link>
                            </div>
                            
                            <div className='Overview'>
                                   <div className='Overview-Wrap'>
                                          <div className='Clients Overview-Item'>
                                                 <h1 ref={clientsRef}>
                                                        {clients}+   
                                                 </h1>
                                                 <p>Clients</p>
                                          </div>
                                          <div className='Patients Overview-Item'>
                                                 <h1 ref={patientsRef}>
                                                        {patients}+ 
                                                 </h1>
                                                 <p>Patients</p>
                                          </div>
                                          <div className='Experience Overview-Item'>
                                                 <h1 ref={experienceRef}>
                                                        {experience}+ 
                                                 </h1>
                                                 <p>Years of experience</p>
                                          </div>
                                   </div>
                                   <div className='Overview-Socials'>
                                          <div className='Overview-Socials-TikTok Soc'>
                                                 <img src={TT} alt='TikTok social media icon for personal trainer'>
                                                 </img>
                                          </div>
                                          <div className='Overview-Socials-Facebook Soc'>
                                          <img src={IG} alt='Instagram social media icon for personal trainer'>
                                                 </img>
                                          </div >
                                          <div className='Overview-Socials-Instagram Soc'>
                                          <img src={FB} alt='Facebook social media icon for personal trainer'>
                                                 </img>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </header>
       );
}
export default Cover;