import React from 'react'
import './Cover.css'
import CoverNov from './CV2.png'
import Sise from './sise.jpg'
function Cover(){
   return(
    <section style={{ backgroundImage: `url(${CoverNov})` }} className='Cover'>
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
              <button>
                     LEARN MORE
              </button>
       </div>
       <div className='Cover-Images'>
              <div className='Cover-Images-Content'>
                     <div className='First-Bar'>

                     </div>
                     <div className='Second-Bar' style={{ backgroundImage: `url(${Sise})` }} >
                            <div className='Inner-First-Bar'>

                            </div>
                     </div>
              </div>
       </div>
       <button class="btn-scroll">
              <div class="scroll"> </div>
       </button>
    </section>
   );
}
export default Cover;