import './Blog.css'
import Tag from './images/tag.png'
import Comment from './images/comment.png'
import Likes from './images/like.png'
import Share from './images/send.png'
import Man from './images/man.png'
import { InstagramEmbed } from 'react-social-media-embed';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
function BlogDetails(){
    const location = useLocation();
    const navigate = useNavigate();

    const [articles, setArticles] = useState(location.state?.articlesData || []);
    const [index, setIndex] = useState(location.state ? location.state.postId : 0);
  
    const article = articles[index];
    const comments = article ? article.comments : [];
    useEffect(() => {
        const specifiLocation = document.getElementById('Blog-Details')
        const offset = 200;
        const offsetPosition = specifiLocation.offsetTop - offset
        window.scrollTo({
            top: offsetPosition,
            behavior:'smooth',
        })
        setIndex(location.state ? location.state.postId : 0);
        setArticles(location.state?.articlesData || []);
       
    }, [location]);

    const toNext = () => {
        if (index < articles.length - 1) {
            const nextIndex = index + 1;
            const nextArticle = articles[nextIndex];
            setIndex(nextIndex);
            navigate(`/blog/${nextIndex}`, { state: { article: nextArticle, articlesData: articles, postId: nextIndex } });
        }
    };
    const toPrevious = () => {
        if (index > 0) {
            const prevIndex = index - 1;
            const prevArticle = articles[prevIndex];
            setIndex(prevIndex);
            navigate(`/blog/${prevIndex}`, { state: { article: prevArticle, articlesData: articles, postId: prevIndex } });
        }
    };

   return(
        <div className="Blog-Container">
            <div className="Banner">
                <h1>
                    Detalji O Blogu
                    
                </h1>
            </div>
            <div className="Blog-Details-Content" id='Blog-Details'>
                <div className='Blog-Details-Text'>
                    <div className='Blog-Details-Text-Image'>
                        <img src='/assets/blog1.jpg'>

                        </img>
                        <h1>
                            {article.title}
                        </h1>
                    </div>
                    <div className='Blog-Details-Text-Content'>
                        <div className='Blog-Tags'>
                            <img src={Tag}>
                            </img>
                            <p>
                                {article.tags} |
                            </p>
                            <img src={Comment}>
                            </img>
                            <p>
                                Comments: 4 | 
                            </p>
                            <img src={Likes}>
                            </img>
                            <p>
                                Likes: 4 
                            </p>
                        </div>
                        <div className='Blog-Text'>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br></br>
                            <br></br>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className='Key-Paragraph'>
                                <div className='Key-Paragraph-Content'>
                                    <p>
                                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                </div>
                            </div>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            <br></br>
                            <br></br>
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <div className='hr'>

                            </div>
                        </div>
                        <div className='Share'>
                            <img src={Share}>
                            </img>
                        </div>
                        <div className='More-Posts'>
                            <div className='Prev-Post' onClick={() => toPrevious()}>
                                <img src='/assets/blog1.jpg'>
                                </img>
                                <div className='More-Posts-Description'>
                                   <p>
                                    Prethodna objava
                                   </p>
                                   <p>
                                    Lorem Ispum
                                   </p>
                                </div>
                            </div>
                            <div className='Next-Post' onClick={() => toNext()}>
                                <img src='/assets/blog1.jpg'>
                                </img>
                                <div className='More-Posts-Description'>
                                <p>
                                    Sledeća objava
                                   </p>
                                   <p>
                                    Lorem Ispum
                                   </p>
                                </div>
                            </div>
                        </div>
                        <div className='hr'>

                        </div>
                        <div className='Comments'>
                            <div className='Comments-Title'>
                                <h1>Comments: 4</h1>
                            </div>
                            <div className='Comments-List'>
                                {comments.map((item, index)=>(
                                    <div className='Comments-List-Item' key ={index}>
                                        <div className='Comments-List-Item-Picture'>
                                            <img src={Man}>
                                            </img>
                                        </div>
                                        <div className='Comments-List-Item-Content'>
                                            <div className='Comments-List-Item-Content-Text'>
                                                <p>
                                                    {item}
                                                </p>
                                            </div>
                                            <div className='Comments-List-Item-Content-Signature'>
                                                <h1>
                                                    Bogdan Petrovic
                                                </h1>
                                            </div>
                                          
                                        </div>
                                    
                                    </div>
                                ))}
                                
                            </div>
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
export default BlogDetails;