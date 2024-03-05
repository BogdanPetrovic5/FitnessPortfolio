import "./LandingAbout.css"
import { useState } from 'react';
import { useEffect } from 'react';
import DjoleAbout1 from './DjoleAbout1.jpg'
import DjoleAbout2 from './DjoleAbout2.jpg'
import DjoleAbout3 from './DjoleAbout3.jpg'
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
       <div className="Home-Page-About-Container">
           <div className='About-Page-Bio'>
            <div className='About-Page-Bio-Paragraph'>
                <div className="About-Paragraph-Desktop-Title">
                        <div>

                        </div>
                        <h1 data-aos="fade-left" >ABOUT ME</h1>
                </div>
                <h1 className="About-Paragraph-Desktop-h1" data-aos="fade-right">
                        Your Personal Trainer and Physical Therapist
                </h1>
                <p className='Main-Paragraph'>
                    <p data-aos="fade-right" data-aos-duration='800' data-aos-offset = '-50'>There are many variations of passages of Lorem Ipsum available, but the majority have </p> <p data-aos="fade-left"  data-aos-duration='800' data-aos-offset = '-50'>suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p> <p data-aos="fade-right"  data-aos-duration='800' data-aos-offset = '-50'>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden</p> <p data-aos="fade-left"  data-aos-duration='800' data-aos-offset = '-50'>in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n</p>
                </p>
                
            </div>
            
            <div className='About-Page-Bio-Image About-Page-Dekstop'>
                
                <img src='assets/DjoleAbout.jpg'></img>
            </div>
        </div>
            {/* <div className='About-Page-Bio-Image-Phone Phone' style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}>
            
            </div> */}
       </div>
       
    )
}
export default LAbout