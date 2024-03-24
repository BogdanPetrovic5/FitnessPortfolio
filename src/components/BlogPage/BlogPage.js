import './BlogPage.css'
import LeftArrow from './images/leftarrow.png';
import RightArrow from './images/rightarrow.png';
import React, { useEffect, useState, useRef } from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function BlogPage(){
    useEffect(()=>{
        const specifiLocation = document.getElementById('Blog')
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    })
    const navigate = useNavigate();

    const navigateToBlogDetails = (article,postId) => {
        navigate(`/blog/${postId}`, { state: { article, articlesData, postId } });
    };
    const articlesData = [
        {
            title: "Unlock Your Potential: 101 Fitness Tips for Success",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Discover the secrets to reaching your fitness goals and unlocking your full potential!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Great article! Very informative and inspiring!",
                "This article changed my perspective completely!",
                "Thanks for sharing! I found it incredibly helpful!",
                "Inspiring content! Keep up the good work!",
                "This was an amazing read! I'll definitely share it."
            ]
        },
        {
            title: "Transform Your Body: The Ultimate Fitness Guide",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Embark on a transformative journey and achieve the body of your dreams with these expert fitness tips!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Amazing read! Very insightful and motivating!",
                "Very informative! Looking forward to more content like this.",
                "This article completely changed my perspective!",
                "Keep up the good work! This was really helpful!",
                "I'll definitely share this with others. Great job!"
            ]
        },
        {
            title: "Master Your Mindset: The Key to Fitness Success",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Learn how to cultivate a winning mindset and conquer your fitness goals!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Fantastic insights! I'm feeling motivated already!",
                "This article really resonated with me! Thanks for sharing!",
                "I found this incredibly helpful! Can't wait to apply it!",
                "Thank you for these tips! Keep up the good work!",
                "Great job! This is exactly what I needed to read!"
            ]
        },
        {
            title: "Elevate Your Workouts: Innovative Techniques for Maximum Results",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Take your workouts to the next level with cutting-edge techniques designed to optimize your performance and results!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "I never thought of trying these techniques before! Thanks for sharing!",
                "Mind-blowing strategies! Can't wait to incorporate them into my routine!",
                "This article is a game-changer! Thank you!",
                "Thanks for sharing your expertise! Keep up the great work!",
                "Brilliant content! Looking forward to more like this!"
            ]
        },
        {
            title: "Fuel Your Fitness Journey: Nutrition Tips for Peak Performance",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Discover the importance of nutrition in achieving your fitness goals and fueling your body for success!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Such valuable information! Thanks for sharing!",
                "This really helped me understand nutrition better! Great job!",
                "Can't wait to try these tips! Keep up the good work!",
                "Thanks for sharing your knowledge! Very insightful!",
                "Awesome article! Looking forward to more content like this!"
            ]
        },
        {
            title: "Revolutionize Your Routine: Fresh Approaches to Fitness",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Break free from boring routines and revolutionize your fitness journey with exciting and effective workouts!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Absolutely inspiring! Can't wait to try these new routines!",
                "I'm excited to try these fresh approaches! Great content!",
                "This article came at the perfect time! Thanks for sharing!",
                "Thanks for the motivation! Keep up the good work!",
                "Great content! Looking forward to more like this!"
            ]
        },
        {
            title: "Embrace the Journey: The Path to Fitness Mastery",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Embrace the ups and downs of your fitness journey and emerge as a stronger, fitter version of yourself!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "This resonated with me deeply! Thanks for sharing!",
                "Exactly what I needed to hear! Great job!",
                "Thanks for the encouragement! Very inspiring!",
                "I'm ready to take on the challenge! Keep up the good work!",
                "Fantastic article! Looking forward to more like this!"
            ]
        },
        {
            title: "Fit for Life: Sustainable Strategies for Lifelong Fitness",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Discover sustainable strategies to maintain your fitness levels for life and enjoy long-term health and vitality!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Really opened my eyes to long-term fitness! Thanks for sharing!",
                "Such practical advice! Very helpful! Great job!",
                "Thanks for emphasizing sustainability! Keep up the good work!",
                "Excited to implement these strategies! Great content!",
                "Well done! Looking forward to more like this!"
            ]
        },
        {
            title: "Achieve Balance: The Art of Fitness and Wellness",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Find harmony between fitness and wellness as you strive for balance in mind, body, and spirit!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Exactly what I needed! Thanks for sharing!",
                "This article speaks to me! Great job!",
                "Thanks for the holistic approach! Very insightful!",
                "Can't wait to achieve balance! Keep up the good work!",
                "Great insights! Looking forward to more like this!"
            ]
        },
        {
            title: "Empower Yourself: Fitness Tips for Confidence and Strength",
            tags: ['Fitness', 'Lifestyle'],
            subject: "Empower yourself with fitness tips that will boost your confidence and strengthen your body from the inside out!",
            date: '15 Jan',
            image: '/assets/blog1.jpg',
            comments: [
                "Feeling empowered already! Thanks for sharing!",
                "Thanks for the confidence boost! Very inspiring!",
                "Excited to start implementing these tips! Great job!",
                "This article is a game-changer! Keep up the good work!",
                "Well done! Looking forward to more like this!"
            ]
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
      const navigateToBlogDetail = (article) =>{
        
      }
    return(
        <div className="Container" id='Blog'>   
            <div className='Banner'>
                <h1 className='AllTitles'>
                    BLOG
                </h1>
            </div>
            <div className='Content' ref={targetDivRef}>
                <div className='Content-Articles' >
                    {ArrayToShow.map((article, index) => (
                        <div key={index} className='Article' onClick={()=> navigateToBlogDetails(article, index, articlesData)}>
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