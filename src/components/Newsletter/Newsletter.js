import './Newsletter.css'
import React from "react"
import NewsLetter from './newsletter.png'
function Newsletter(){
    return(
        <div className="Newsletter-Container">
            
            <div className="Newsletter-Banner">
                <h1>
                    Pretplati se na novosti!
                </h1>
            </div>
            <div className='Newsletter-Wrap'>
                <form className='Newsletter-Form'>
                    <div className='Newsletter-Icon'>
                        <div className='Icon-Container'>
                        <img src={NewsLetter}>
                        </img>
                        </div>
                       
                    </div>
                    <h1>
                        Newsletter
                    </h1>
                    <p className='First-Paragraph'>
                        Ostanite u toku sa svim novim desavnjima!
                    </p>
                    <div className='Input-Button'>
                        <input type="email" className='Email' placeholder="Your email">

                        </input>
                        <input type='button' className='Submit' value="Pretplati se!"></input>
                        
                    </div>
                    <p className='No-Spam'>
                        Vas Email je siguran, ne spamujemo!
                    </p>
                </form>
            </div>
        </div>
    )
}
export default Newsletter;