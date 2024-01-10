import './Social.css'
function Social(){
    
    return(
        <section className="Socials">
           
            <div className='Socials-Images'>
                <img src='/assets/instagram.png' alt='Socials' 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>
                <img src='/assets/facebook.png' alt='Socials' 
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>
                <img src='/assets/video.png' alt='Socials'
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"/>

                
            </div>
        </section>
    );
}
export default Social;