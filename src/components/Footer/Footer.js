import './Footer.css'
import logo from './images/logo.png'
import Fb from './images/facebook.png'
import Ig from './images/instagram.png'
import Tt from './images/tiktok.png'
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
                <section className='Logo-Location'>
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
                    <p><Link to='/'>POČETNA</Link></p>
                    <p><Link to='/programs'>PROGRAMI</Link></p>
                    <p><Link to='/about'>O MENI</Link></p>
                    <p><Link>CONTACT</Link></p>
                    <p><Link to='/blog'>BLOG</Link></p>
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
                    
                </section>
            </div>
        </div>
    )
}
export default Footer