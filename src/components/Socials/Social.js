import './Social.css'
import Fb from './facebook.png'
import Ig from './instagram.png'
import Tt from './tiktok.png'
function Social(){
    
    return(
        <section className="Socials">
           
            <div className='Socials-Images'>
                <img src={Fb} alt='Socials' 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>
                <img src={Ig} alt='Socials' 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>
                <img src={Tt} alt='Socials'
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>

                
            </div>
        </section>
    );
}
export default Social;