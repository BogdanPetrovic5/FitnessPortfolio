import "./LandingAbout.css"
import { useState } from 'react';
import { useEffect } from 'react';
function LAbout(){
       const [imageUrl, setImageUrl] = useState('/assets/DjoleAbout3.png');

  useEffect(() => {
    const handleResize = () => {
      setImageUrl(window.innerWidth < 1023 ? '/assets/DjoleAbout3.png' : '');
    };

    // Initial call to set the correct image URL
    handleResize();

    // Add event listeners for window resize and page load
    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);

    // Remove event listeners when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load', handleResize);
    };
  }, []);
    return(
        <section className = "About" style={{ backgroundImage: `url(${imageUrl})` }}>
            
            <div className='About-Paragraph' >
              <div class="twelve" data-aos="fade-down" data-aos-duration="1000">
                     <h1>About Me</h1>
              </div>
              <p data-aos="fade-down" data-aos-duration="1000">
                     There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
              </p>
              <a class="fancy" href="#" data-aos="fade-down"
              data-aos-duration="1000">
                     <span class="top-key" data-aos="fade-down"
              data-aos-duration="1000"></span>
                     <span class="text" data-aos="fade-down"
              data-aos-duration="1000">LEARN MORE</span>
                     <span class="bottom-key-1" data-aos="fade-down"
              data-aos-duration="1000"></span>
                     <span class="bottom-key-2" data-aos="fade-down"
              data-aos-duration="1000"></span>
                     </a>
            </div>
            <div className="About-Paragraph-Desktop">
              <div className="About-Paragraph-Desktop-Title">
                     <div>

                     </div>
                     <h1>ABOUT ME</h1>
              </div>
              <h1 className="About-Paragraph-Desktop-h1">
                     Your Personal Trainer and Physical Therapist
              </h1>
              <p>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
              
              </p>
              <button className="learn-more-bttn">
                     <a href="#" class="btn2"><span class="spn2">LEARN MORE !</span></a>
              </button>
            </div>
            <div className="About-Img">
                <img src="/assets/DjoleAbout.jpg"></img>
            </div>

        </section>
    )
}
export default LAbout