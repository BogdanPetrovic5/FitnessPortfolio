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
                            Usluge
                        </Link>
                    </li>
                    <li>
                        <Link>
                            O meni
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Početna
                        </Link>
                    </li>
                </div>
                <div className='Footer-Services'>
                    <h1>
                        Usluge
                    </h1>
                    <li>
                        <Link>
                            Online Treninzi
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Planovi
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Rehabilitacija
                        </Link>
                    </li>
                    <li>
                        <Link>
                            Ishrana
                        </Link>
                    </li>
                </div>
                <div className='Footer-Socials'>
                    <h1>
                        Zaprati me
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
                {/* <section className='Logo-Location'>
                    <img src='/assets/djolencelogo2.png'></img>
                    <p>
                        Kragujevac, Srbija
                    </p>
                    <p>
                        0000000000
                    </p>
                    <p>
                        contact@email.com
                    </p>
                </section>
                <section className='Footer-Nav'>
                    <h1>Korisni linkovi</h1>
                    <p><Link to='/'>Početna</Link></p>
                    <p><Link to='/programs'>Programi</Link></p>
                    <p><Link to='/about'>O meni</Link></p>
                    <p><Link>Kontakt</Link></p>
                    <p><Link to='/blog'>Blog</Link></p>
                </section>
                <section className='Footer-Newsletter'>
                    <h1>Pretplati se</h1>
                    <div class="search">
                        <input type='email'>
                        </input>
                        <button>
                            Pretplati se
                        </button>
                    </div>
                    <p>&copy; 2024 Đorđe Marinković. Sva prava zadržana.</p>
                    <div className='Footer-Social'>
                        <img src={Tt} onClick={()=>openLink('Tt')}>
                        </img>
                        <img src={Ig} onClick={()=>openLink('ig')}>
                        </img>
                        <img src={Fb} onClick={()=>openLink('Fb')}>
                        </img>
                    </div>
                    
                </section> */}
            </div>
            <div className='Footer-Copyright'>
                <div className='Developer'>
                    <p>
                        Made by Bogdan Petrović
                    </p>
                </div>
                <div className='Copy-Right'>
                    <p>
                        &copy; 2024 Đorđe Marinković. Sva prava zadržana.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer