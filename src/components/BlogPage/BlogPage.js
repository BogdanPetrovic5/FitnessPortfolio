import './BlogPage.css'
import LeftArrow from './leftarrow.png';
import RightArrow from './rightarrow.png';
import React, { useEffect, useState, useRef } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { useLocation } from 'react-router-dom';

function BlogPage(){
    useEffect(()=>{
        const specifiLocation = document.getElementById('Blog')
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
    const articlesData = [
        {
          title: 'Samo od mene za vas 100 nacina da jebete',
          tags: ['Food', 'Lifestyle'],
          subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          date: '15 Jan',
          image: '/assets/blog1.jpg',
        },
        {
            title: 'Samo od mene za vas 100 nacina da jebete',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
        
          {
            title: 'Samo od mene za vas 100 nacina da jebete',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
          {
            title: 'Samo od mene za vas 100 nacina da zaradite kurac',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
        
          {
            title: 'Samo od mene za vas 100 nacina da zaradite kurac',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
          {
            title: 'Samo od mene za vas 100 nacina da zaradite kurac',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
        
          {
            title: 'Samo od mene za vas 100 nacina da izadjete iz klozeta',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
          {
            title: 'Samo od mene za vas 100 nacina da izadjete iz klozeta',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
        
          {
            title: 'Samo od mene za vas 100 nacina da izadjete iz klozeta',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          },
          {
            title: 'Samo od mene za vas 100 nacina da izadjete iz obdanista',
            tags: ['Food', 'Lifestyle'],
            subject: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
            date: '15 Jan',
            image: '/assets/blog1.jpg',
          }

        
      ];
      const [LowerEdge, setLowerEdge] = useState(0);
      const [HigherEdge, setHigherEdge] = useState(3);
      const targetDivRef = useRef(null);
      const location = useLocation();
      const updateEdges = (direction) => {
        if (direction === 'next' && HigherEdge < articlesData.length) {
          setLowerEdge(LowerEdge + 3);
          setHigherEdge(HigherEdge + 3);
        } else if (direction === 'prev' && LowerEdge > 0) {
          setLowerEdge(LowerEdge - 3);
          setHigherEdge(HigherEdge - 3);
        }
        if (targetDivRef.current) {
            targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      };
      useEffect(()=>{
        if(location.pathname === '/'){
            setHigherEdge(2);
        }
      })
      const ArrayToShow = articlesData.slice(LowerEdge, HigherEdge);
    return(
        <div className="Container" id='Blog'>   
            <div className='Banner'>
                <h1>
                    BLOG
                </h1>
            </div>
            <div className='Content' ref={targetDivRef}>
                <div className='Content-Articles' >
                    {ArrayToShow.map((article, index) => (
                        <div key={index} className='Article'>
                            <div className='Article-Date'>
                                <h1>{article.date}</h1>
                            </div>
                            <div className='Article-Img' style={{ backgroundImage: `url(${article.image})` }}></div>
                            <div className='Article-Info'>
                                <div className='Article-Info-Text'>
                                <div className='Article-Title'>
                                    <h1>{article.title}</h1>
                                </div>
                                <div className='Article-Paragraph'>
                                    <p>{article.subject}</p>
                                </div>
                                <div className='Article-Tags'>
                                    <img src="assets/trend.png" alt="Trend Icon" />
                                    <p className='Tags'>{article.tags.join(', ')}</p>
                                </div>
                                </div>
                            </div>
                        
                        </div>
                
                    ))}
      
                    <div className='Navigation-Buttons'>
                        <div className='Buttons-Wrap'>
                        
                            <button
                            src={LeftArrow}
                            onClick={() => updateEdges('prev')}
                            alt="Previous"
                            className={LowerEdge === 0 ? 'first-button' : ''}
                            >
                            Prev
                            </button>
                        
                            
                        
                        <button
                        src={RightArrow}
                        onClick={() => updateEdges('next')}
                        alt="Next"
                        className={HigherEdge >= articlesData.length ? 'last-button' : ''}
                        >
                        Next
                        </button>
                    
                        </div>
                    </div>
                </div>
                <div className='Content-Options'>
                    <div className='Content-Options-Search'>
                        <div class="input-wrap">
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
                        
                    </div>
                    <div className='IG-Embed' style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', gap:'50px', marginBottom:'50px'}}>
                        <InstagramEmbed url="https://www.instagram.com/p/CyvoH8YtmMs/" style={{ width: '100%'}}/ >
                        <InstagramEmbed url="https://www.instagram.com/p/CzwEZ4wttt-/?img_index=5" style={{ width: '100%' }}/ >
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default BlogPage