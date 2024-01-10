import './LGallery.css'
function LGallery(){
    return(
        <div class="parent">
            <div class="div1"> 
                <section id='First' className='First-Image-Section' style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }} data-aos="fade-up" data-aos-delay = "100">
                </section> 
                <section id='Second' className='Second-Image-Section' style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} data-aos="fade-up" data-aos-delay = "200">
                </section> 
            </div>
            <div class="div2"> <section  id='Third' className='First-Image-Section' style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }} data-aos="fade-up" data-aos-delay = "300">
                </section> 
                <section  id='Fourth'className='Second-Image-Section' style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }}data-aos="fade-down" data-aos-delay = "400">
                </section> </div>
            <div class="div3"> 
            <section  id='Fifth' style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} data-aos="fade-down" data-aos-delay = "500"></section>
            </div>
            <div class="div4"><section  id='Sixth' style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} data-aos="fade-down" data-aos-delay = "800"></section> </div>

            <div class="div5" style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }} > </div>
            <div class="div6" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>
            <div class="div7" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>
            <div class="div8" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>

            <div className='Grid-Overlay'>
                <a class="bttn type--A" >
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text">GALLERY</span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
            </div>
        </div>

        
    )
}
export default LGallery