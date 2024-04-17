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
import blog from './images/blog.jpg'
function BlogDetails(){
    const location = useLocation();
    const navigate = useNavigate();

    const [articles, setArticles] = useState(location.state?.articlesData || []);
    const [index, setIndex] = useState(location.state ? location.state.postId : 0);
    const [prev, setPrev] = useState(index - 1)
    
    let next = index + 1
    const article = articles[index];
    const comments = article ? article.comments : [];
    useEffect(() => {
        const specifiLocation = document.getElementById('Blog-Details-Container')
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
       <div className='Blog-Details-Container' id='Blog-Details-Container'>
            <div className='Blog-Details-Title'>
                <h1>
                    {article.title}
                </h1>
                <p >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
            </div>
            <img src={blog}>
            </img>
            <p className='Blog-Details-Content'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                <br>
                </br>
                <br>
                </br>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <div className='Blog-Details-More'>
                <div className='Blog-Details-More-Title'>
                    <h1 className='Blog-Title-1'>
                        Ostali članci
                    </h1>
                    <h1 className='Blog-Title-2'>
                        Pogledaj i druge objave!
                    </h1>
                </div>
                <div className='Blog-Details-More-Next-Prev'>
                    <div className='Blog-Article' style={{backgroundImage: `url(${blog})`}} onClick={()=>toPrevious()}>
                            <div className='Blog-Description'>
                                <div>
                                    <span>
                                        Januar 17, 2024
                                    </span>
                                    <h1>
                                    {index === 0 ? articles[articles.length - 1].title : articles[index].title}
                                    </h1>
                                </div>
                                
                            </div>
                    </div>
                    <div className='Blog-Article' style={{backgroundImage: `url(${blog})`}} onClick={()=>toNext()}>
                            <div className='Blog-Description'>
                                <div>
                                    <span>
                                        Januar 17, 2024
                                    </span>
                                    <h1>
                                        {articles[next].title}
                                    </h1>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </div>
            <div className='Contact-Banner-Container'>
                        <div className='Contact-Banner-Title'>
                            <h1 >
                              Kreni da radiš sa mnom!
                            </h1>
                            <button>
                              Kontaktiraj me!
                            </button>
                        </div>
            </div>
       </div>
   )
}
export default BlogDetails;