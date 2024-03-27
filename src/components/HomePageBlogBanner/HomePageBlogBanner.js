import './HomePageBlogBanner.css'
import { useEffect, useState } from 'react';
import blog from './images/blog.jpg'
function HomePageBlogBanner({articles}){
    const [articlesData, setArticlesData] = useState([]);
    useEffect(() => {
        console.log(articles);
        setArticlesData(articles);
    }, [articles]);
    return(
        <div className='Home-Page-Blog-Container'>
            <div className="HomePage-Blog-Banner">
                <h1 className='Absolute'>BLOG</h1>
                <div className='HomePage-Blog-Banner-Title'>
                
                    <div></div>
                    <h1 className="Decoration-Titles">
                        Novije objave na mom blogu!
                    </h1>
                </div>
                <div className='HomePage-Blog-Banner-Title-h1'>
                    <h1 className='AllTitles'>
                        BUDITE U TOKU SA <span> NOVIM DESAVANJIMA!</span>
                    </h1>
                </div>
            </div>
            <div className='Blog-Container'>
                <div className='Blog-Wrapper'>
                    <div className='Blog-First' style={{backgroundImage: `url(${blog})`}}>
                        <div className='Blog-Description'>
                            <div>
                                <span>
                                    Januar 17, 2024
                                </span>
                                <h1>
                                    {articles[0].title}
                                </h1>
                            </div>
                            
                        </div>
                    </div>
                    <div className='Blog-Last-Two' >
                        <div className='Blog-Second'  style={{backgroundImage: `url(${blog})`}}>
                            <div className='Blog-Description'>
                            <div>
                                <span>
                                    Januar 17, 2024
                                </span>
                                <h1>
                                    {articles[1].title}
                                </h1>
                            </div>
                            </div>
                        </div>
                        <div className='Blog-Third'  style={{backgroundImage: `url(${blog})`}}>
                            <div className='Blog-Description'>
                            <div>
                                <span>
                                    Januar 17, 2024
                                </span>
                                <h1>
                                    {articles[2].title}
                                </h1>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
}
export default HomePageBlogBanner