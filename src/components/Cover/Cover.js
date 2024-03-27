import React from 'react'
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
   return(
    <section className='Cover'  style={{backgroundImage: `url('https://assets-global.website-files.com/65656d367ef06b6df2247915/657029cc9670bafa97954427_muscular-sportsman-building-biceps-with-dumbbell_73891bba2b5546b1bb17eef7d6d184ea%201.webp')`}}>
      
         <div className='Title' data-aos="fade-right" data-aos-duration="1500">
              <div className='Cover-Title'>
                     <div className='Title-Decoration' 
                            data-aos-duration="1000">
                            <div></div> 
                            <h1>SA DJOLETOM KROZ PAKAO</h1>
                     </div>
                     <h1 className='Cover-Title-h1'>
                     Lorem Ipsum is simply <span>dummy text</span> 
                     </h1>
                     <Link to="/about"> 
                            <button>LEARN MORE</button>
                     </Link>
              </div>
              
              <div className='Overview'>
                     <div className='Overview-Wrap'>
                            <div className='Clients Overview-Item'>
                                   <h1>
                                       130+   
                                   </h1>
                                   <p>Klijenata</p>
                            </div>
                            <div className='Patients Overview-Item'>
                                   <h1>
                                       1000+ 
                                   </h1>
                                   <p>Pacijenata</p>
                            </div>
                            <div className='Experience Overview-Item'>
                                   <h1>
                                       4+ 
                                   </h1>
                                   <p>Godine iskustva</p>
                            </div>
                     </div>
                     <div className='Overview-Socials'>
                            <div className='Overview-Socials-TikTok Soc'>
                                   <img src={TT}>
                                   </img>
                            </div>
                            <div className='Overview-Socials-Facebook Soc'>
                            <img src={IG}>
                                   </img>
                            </div >
                            <div className='Overview-Socials-Instagram Soc'>
                            <img src={FB}>
                                   </img>
                            </div>
                     </div>
              </div>
       </div>
       <div className='Cover-Images'>
              <div className='Cover-Images-Content'>
                     {/* 
                     <div className='Second-Bar' style={{ backgroundImage: `url(${Sise})` }} data-aos="fade-up"   data-aos-delay="500">
                           
                     </div>
                     <div className='Third-Bar' data-aos="fade-up"  data-aos-delay="1500">

                     </div>
                     <div className='Fourth-Bar' style={{ backgroundImage: `url(${Podlaktice})` }} data-aos="fade-down"  data-aos-delay="800">

                     </div>
                     <div className='Fifth-Bar' data-aos="fade-up"  data-aos-delay="1600">

                     </div>
                     <div className='Sixth-Bar' style={{ backgroundImage: `url(${Ledja})` }} data-aos="fade-up"  data-aos-delay="1100">

                     </div>
                     <div className='Seventh-Bar'data-aos="fade-up"  data-aos-delay="1900">

                     </div>
                     <div className='Eight-Bar'data-aos="fade-up"  data-aos-delay="1900">

                     </div> */}

                     {/* <div className='First-Bar' data-aos="fade-up" data-aos-delay="1300">

                     </div> */}
                     <div className='First-Image' data-aos="slide-down" data-aos-duration = "900">
                            <div className='Second-Bar' style={{ backgroundImage: `url(${Ruka})` }}data-aos-delay="200">
                                   
                            </div>
                            <div className='First-Bar' data-aos-delay="500">

                            </div>
                            <div className='Third-Bar' data-aos-delay="800">

                            </div>
                     </div>
                     
                     {/*  */}
                     <div className='Second-Image'  data-aos="slide-up" data-aos-duration = "900">
                            <div className='Fourth-Bar' style={{ backgroundImage: `url(${Podlaktice})` }}   data-aos-delay="1100">

                            </div>
                            <div className='Fifth-Bar' data-aos-delay="1400" >

                            </div>
                     </div>
                     
                     {/*  */}
                     <div className='Third-Image' data-aos="slide-down" data-aos-duration = "900">
                            <div className='Sixth-Bar' style={{ backgroundImage: `url(${Ledja})` }} data-aos-delay="1700">

                            </div>
                            <div className='Seventh-Bar' data-aos-delay="2000">

                            </div>
                            <div className='Eight-Bar'data-aos-delay="2300">

                            </div>
                     </div>
                     
                     {/* <div className='Seventh-Bar'data-aos="fade-up"  data-aos-delay="1900">

                     </div>
                      */}
              </div>
       </div>
       
    </section>
   );
}
export default Cover;