import "./LandingAbout.css"
import { useState } from 'react';
import { useEffect } from 'react';
import Decoration from './Images/Decorations.png'
function LAbout(){
       const [imageUrl, setImageUrl] = useState('/assets/DjoleAbout3.png');

  useEffect(() => {
    const handleResize = () => {
      setImageUrl(window.innerWidth < 1023 ? '/assets/DjoleAbout3.png' : '');
    };

   
    handleResize();

 
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);
    return(
    
            
           <div className='About-Page-Bio' data-aos='fade-up'>
            <div className='About-Page-Bio-Paragraph'>
                <h1 className="Absolute">ABOUT ME</h1>
                <div className="About-Paragraph-Desktop-Title">
                        <div >

                        </div>
                        <h1 className="Decoration-Titles">About me</h1>
                </div>
                <h1 className="About-Paragraph-Desktop-h1 AllTitles">
                        Tvoj Perosnalni Trener I <span>Fizioterapeut</span>
                </h1>
                <img src={Decoration}></img>
                <p >
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure 

                </p>
                <button>
                  VIŠE
                </button>
                
            </div>
            
            <div className='About-Page-Bio-Image'>
                <div className="About-Page-Bio-Image-First-Section">
                    <img src="assets/DjoleAbout.jpg" data-aos="fade-down-right" data-aos-duration = "900">
                    </img>
                    <img src="assets/DjoleAbout.jpg" data-aos="fade-up-right" data-aos-duration = "900">
                    </img>
                </div>
                <div className="About-Page-Bio-Image-Second-Section">
                    <img src="assets/DjoleAbout.jpg" data-aos="fade-down-left" data-aos-duration = "900">
                    </img>
                    <img src="assets/DjoleAbout.jpg" data-aos="fade-up-left" data-aos-duration = "900">
                    </img>
                </div>
            </div>
          </div>
    
                              
     
       
    )
}
export default LAbout