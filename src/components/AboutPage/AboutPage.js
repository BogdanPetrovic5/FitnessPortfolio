import './AboutPage.css'
import React from 'react'
import HSDjole from './DjoleSrednja.jpg';
import HighSchool from './highschool.png'
import UNIDjole from './UNIDjole.jpg'
import MortarBoard from './mortarboard.png'
function AboutPage(){
    return (
     <div className='About-Page-Container'>
        <div className='Banner'>
            <h1>ABOUT ME!</h1>
        </div>        
        <div className='About-Page-Bio'>
            <div className='About-Page-Bio-Paragraph'>
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
                
                </div>
            <div className='About-Page-Bio-Image'>
                <img src="/assets/DjoleAbout.jpg"></img>
            </div>
        </div>
        
        <div className='Education-Content'>
            <div className='Education-Banner'>
                <div>
                    <h1>HIGH</h1>
                    <img src={HighSchool}></img>
                    <h1>SCHOOL</h1>
                </div>
            
            </div>
            <div className='Education-Content-Hs'>
                <div className='Education-Content-Paragraph'>
                    <div className="Education-Content-Paragraph-Title">
                        <div>

                        </div>
                        <h1>GIMNAZIJA</h1>
                    </div>
                    <h1 className="Education-Content-Paragraph-Title-h1">
                        My Early Years Of Being Djole
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
                    </p>
                </div>
                <div className='Education-Content-Image'>
                    <img className='framed' src={HSDjole}></img>
                </div>
            </div>
            <div className='Education-Banner'>
                <div>
                    <h1>UNI</h1>
                    <img src={MortarBoard}></img>
                    <h1>VERSITY</h1>
                </div>
            
            </div>
            <div className='Education-Content-Uni'>
                <div className='Education-Content-Paragraph'>
                    <div className="Education-Content-Paragraph-Title">
                        <div>

                        </div>
                        <h1>MEDICINSKI FAKULTET</h1>
                    </div>
                    <h1 className="Education-Content-Paragraph-Title-h1">
                        My Late Years Of Being Djole
                    </h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as n
                    </p>
                </div>
                <div className='Education-Content-Image'>
                    <img className='framed' src={UNIDjole}></img>
                </div>
            </div>
        </div>
        <div className='Banner-Goal'>
            <h1>
                My Goal
            </h1>
        </div>
     </div>   
    )
}
export default AboutPage