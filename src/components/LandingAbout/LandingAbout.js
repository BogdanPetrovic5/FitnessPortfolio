import "./LandingAbout.css"
import { useState } from 'react';
import { useEffect } from 'react';

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
                <h1 className="Absolute">O MENI</h1>
                <div className="About-Paragraph-Desktop-Title">
                        <div >

                        </div>
                        <h1 className="Decoration-Titles">O meni</h1>
                </div>
                <h1 className="About-Paragraph-Desktop-h1 AllTitles">
                        Tvoj Perosnalni Trener I <span>Fizioterapeut</span>
                </h1>
                <p >
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n

                </p>
                
            </div>
            
            <div className='About-Page-Bio-Image'>
                
                <img src='assets/DjoleAbout.jpg'></img>
            </div>
          </div>
    
                              
     
       
    )
}
export default LAbout