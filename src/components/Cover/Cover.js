import React from 'react'
import './Cover.css'
function Cover(){
   return(
    <section style={{ backgroundImage: `url(/assets/DJOLOLCOVER.jpg)` }} className='Cover'>
         <div className='Title' data-aos="fade-right" data-aos-duration="1500">
               <div className='Title-Decoration' 
     data-aos-duration="1000"><div></div> SA DJOLETOM KROZ PAKAO</div>
               <h1 className='' 
     data-aos-duration="1000"> <span>ĐOLE</span> <br></br> U <br></br> TERETANI</h1>
               <a class="fancy" href="#" 
     data-aos-duration="1000">
            <span class="top-key" 
     data-aos-duration="1000"></span>
            <span class="text" 
     data-aos-duration="1000">LEARN MORE</span>
            <span class="bottom-key-1" 
     data-aos-duration="1000"></span>
            <span class="bottom-key-2" 
     data-aos-duration="1000"></span>
            </a>
         </div>
       <button class="btn-scroll">
              <div class="scroll"> </div>
       </button>
    </section>
   );
}
export default Cover;