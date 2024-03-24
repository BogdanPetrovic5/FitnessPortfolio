import './Social.css'
import Fb from './images/facebook.png'
import Ig from './images/instagram.png'
import Tt from './images/tiktok.png'
import Fb1 from './images/facebookAbout.png'
import Tt1 from './images/tiktokAbout.png'
import Ig1 from './images/instagramAbout.png'
function Social(){
    const openLink = (linkType) =>{
        if(linkType === "ig"){
            window.location.href = 'https://www.instagram.com/marinkovic.djordjee/'
            console.log('ASDASDASD')
        }
        if(linkType === "Tt"){
            window.location.href = 'https://www.tiktok.com/@imarinkovici'
            console.log('ASDASDASD')
        }
        if(linkType === "Fb"){
            window.location.href = 'https://www.facebook.com/djordjedjole.marinkovic'
            console.log('ASDASDASD')
        }
    }
    return(
        <section className="Socials" >
            <div className='Socials-Content'>
                <div className='Socials-Content-Title'>
                    <h2 >
                        Zaprati me na socijalnim mrezama!
                    </h2>
                </div>
                <div className='Socials-Icons'>
                    <img src={Ig} className='Home-Icon' onClick={() => openLink("ig")}>
                    
                    </img>
                    <img src={Tt} className='Home-Icon' onClick={() => openLink("Tt")}>
                    
                    </img>
                    <img src={Fb} className='Home-Icon' onClick={() => openLink("Fb")}>
                    
                    </img>

                    <img src={Ig1} className='About-Icon'onClick={() => openLink("ig")}>
                    
                    </img>
                    <img src={Tt1} className='About-Icon'>
                    
                    </img>
                    <img src={Fb1} className='About-Icon'>
                    
                    </img>
                </div>
            </div>
            
        </section>
    );
}
export default Social;