import './Footer.css'
import logo from './images/logo.png'
import Fb from './images/facebook.png'
import Ig from './images/instagram.png'
import Tt from './images/tik-tok.png'
import { Link, useLocation  } from 'react-router-dom';
function Footer(){
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
        <div className="Footer">
            <div className='Footer-Content'>

                <div className='Footer-NewsLetter'>
                    <img src='./assets/djolencelogo2.png'>
                    </img>
                    <p>
                        Pretplati se na novosti i ostani u toku!
                    </p>
                    <div className='Newsletter-Button-Wrap'>
                        <input type='email' name='email' placeholder='Unesi svoj mail'>
                        </input>
                        <button>
                            Pretplati se
                        </button>
                    </div>
                </div>
                <div className='Footer-Navigation'>
                    <h1>
                        Stranice
                    </h1>
                    <li>
                        <Link>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link>
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Home
                        </Link>
                    </li>
                </div>
                <div className='Footer-Services'>
                    <h1>
                        Services
                    </h1>
                    <li>
                        <Link>
                            Online coaching
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Plans
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Rehab
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Diet
                        </Link>
                    </li>
                </div>
                <div className='Footer-Socials'>
                    <h1>
                        Follow me
                    </h1>
                    <li>
                        <img src={Ig}></img>Instagram
                    </li>
                    <li>
                    <img src={Tt}></img>Tik Tok
                    </li>
                    <li>
                    <img src={Fb}></img>Facebook
                    </li>
                </div>
                
            </div>
            <div className='Footer-Copyright'>
                <div className='Developer'>
                    <p>
                        Made by Bogdan Petrović
                    </p>
                </div>
                <div className='Copy-Right'>
                    <p>
                        &copy; 2024 Đorđe Marinković. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer