import './Footer.css'
import logo from './images/logo.png'
function Footer(){
    return(
        <div className="Footer">
            <div className='Footer-Content'>
                <section className='Logo-Location'>
                    <img src='/assets/djolencelogo2.png'></img>
                    <p>
                        Kragujevac, Serbia
                    </p>
                    <p>
                        0000000000
                    </p>
                    <p>
                        contact@email.com
                    </p>
                </section>
                <section className='Footer-Nav'>
                    <h1>Useful links</h1>
                    <p>HOME</p>
                    <p>PROGRAMS</p>
                    <p>ABOUT</p>
                    <p>CONTACT</p>
                    <p>BLOG</p>
                </section>
                <section className='Footer-Newsletter'>
                    <h1>Subscribe</h1>
                    <div class="search">
                    <input placeholder="Email..." type="text"/>
                    <button type="submit">Subscribe</button>
                    </div>

                    
                </section>
            </div>
        </div>
    )
}
export default Footer