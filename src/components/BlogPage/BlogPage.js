import './BlogPage.css'
// import InstagramEmbed from 'react-instagram-embed';
function BlogPage(){
    return(
        <div className="Container">   
            <div className='Banner'>
                <div class="app">
                    <div class="glitch" data-text="Glitchin!">
                        BLOG
                    </div>
                </div>
            </div>
            <div className='Content'>
                <div className='Content-Articles'>
                    <div className='Article'> 
                        <div className='Article-Date'>
                            <h1>15 <br></br> Jan</h1>
                        </div>
                        <div className='Article-Img' style={{ backgroundImage: `url(/assets/blog1.jpg)` }} >

                        </div>
                        <div className= 'Article-Info'>
                            <div className = 'Article-Info-Text'>
                                <div className= 'Article-Title'>
                                    <h1>
                                        Samo od mene za vas 100 nacina da jebete
                                    </h1>
                                </div>
                                <div className= 'Article-Paragraph'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </p>
                                </div>
                                <div className = 'Article-Tags'>
                                    <img src="assets/trend.png"></img>
                                    <p>Food, lifestyle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Article'> 
                        <div className='Article-Date'>
                            <h1>15 <br></br> Jan</h1>
                        </div>
                        <div className='Article-Img' style={{ backgroundImage: `url(/assets/blog1.jpg)` }} >

                        </div>
                        <div className= 'Article-Info'>
                            <div className = 'Article-Info-Text'>
                                <div className= 'Article-Title'>
                                    <h1>
                                        Samo od mene za vas 100 nacina da jebete
                                    </h1>
                                </div>
                                <div className= 'Article-Paragraph'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </p>
                                </div>
                                <div className = 'Article-Tags'>
                                    <img src="assets/trend.png"></img>
                                    <p>Food, lifestyle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Article'> 
                        <div className='Article-Date'>
                            <h1>15 <br></br> Jan</h1>
                        </div>
                        <div className='Article-Img' style={{ backgroundImage: `url(/assets/blog1.jpg)` }} >

                        </div>
                        <div className= 'Article-Info'>
                            <div className = 'Article-Info-Text'>
                                <div className= 'Article-Title'>
                                    <h1>
                                        Samo od mene za vas 100 nacina da jebete
                                    </h1>
                                </div>
                                <div className= 'Article-Paragraph'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </p>
                                </div>
                                <div className = 'Article-Tags'>
                                    <img src="assets/trend.png"></img>
                                    <p>Food, lifestyle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Article'> 
                        <div className='Article-Date'>
                            <h1>15 <br></br> Jan</h1>
                        </div>
                        <div className='Article-Img' style={{ backgroundImage: `url(/assets/blog1.jpg)` }} >

                        </div>
                        <div className= 'Article-Info'>
                            <div className = 'Article-Info-Text'>
                                <div className= 'Article-Title'>
                                    <h1>
                                        Samo od mene za vas 100 nacina da jebete
                                    </h1>
                                </div>
                                <div className= 'Article-Paragraph'>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    </p>
                                </div>
                                <div className = 'Article-Tags'>
                                    <img src="assets/trend.png"></img>
                                    <p>Food, lifestyle</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='Content-Options'>
                    <div className='Content-Options-Search'>
                        <div class="input-container">
                            <input placeholder="SEARCH" type="text" class="input"/>
                            <span> <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                        <g>
                        <path
                            d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                        ></path>
                        </g>
                    </svg></span>
                        </div>
                        <button>SEARCH</button>
                    </div>
                    <div className='Content-Options-Categories'>
                        <div className='Content-Options-Categories-Title'>
                            <h1>Categories</h1>
                            <div className='hr'></div>
                        </div>
                        <div className='Content-Options-Categories-List'>
                            <span>
                                Food
                                <div className='hr'></div>
                            </span>
                            <span>
                                Gym
                                <div className='hr'></div>
                            </span>
                            <span>
                                Lifestyle
                                <div className='hr'></div>
                            </span>
                            <span>
                                Mindset
                                <div className='hr'></div>
                            </span>
                            <span>
                                Pain
                            </span>
                        </div>
                            {/* <InstagramEmbed
                                url="https://www.instagram.com/p/CzwEZ4wttt-/?utm_source=ig_web_copy_link"
                                maxWidth={540}
                                hideCaption={false}
                                containerTagName="div"
                                protocol=""
                                injectScript
                                onLoading={() => {}}
                                onSuccess={() => {}}
                                onAfterRender={() => {}}
                                onFailure={() => {}}
                            /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BlogPage