import React from 'react'
import './Cover.css'

import Sise from './images/ruka.jpeg'
import Podlaktice from './images/podlaktica.jpg'
import Ledja from './images/ledja.jpg'
import { Link, useLocation  } from 'react-router-dom';
function Cover(){
   return(
    <section className='Cover'>
         <div className='Title' data-aos="fade-right" data-aos-duration="1500">
              <div className='Title-Decoration' 
                     data-aos-duration="1000"><div></div> SA DJOLETOM KROZ PAKAO
              </div>
              <h1 className='' 
                     data-aos-duration="1000"> 
                     <span>
                            ĐOLE
                     </span> <br></br> U <br></br> TERETANI
              </h1>
              <Link to="/about"> 
                      <button>LEARN MORE</button>
              </Link>
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
                            <div className='Second-Bar' style={{ backgroundImage: `url(${Sise})` }}data-aos-delay="200">
                                   
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