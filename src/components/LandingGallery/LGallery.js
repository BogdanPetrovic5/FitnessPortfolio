import './LGallery.css'
import React, { useState, useEffect } from 'react';
import GalleryIcon from './gallery.png'
import { Link } from 'react-router-dom';
function LGallery(){
    const [modalImageUrl, setModalImageUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [hoverDirection, setHoverDirection] = useState('');
    const parameterValue = "Gallery"
    const handleSectionClick = (bgImgUrl) => {
        setModalImageUrl(bgImgUrl);
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const handleHover = (e, sectionId) => {
        const direction = getHoverDirection(e);
        setHoverDirection({ ...hoverDirection, [sectionId]: direction });
    };
    const handleMouseLeave = () => {
        setHoverDirection('');
    };

    const getHoverDirection = (e, el) => {
        const { currentTarget } = e;
        if (currentTarget) {
            const rect = currentTarget.getBoundingClientRect();
            const offsetX = e.clientX - rect.left - rect.width / 2;
            const offsetY = e.clientY - rect.top - rect.height / 2;

            return Math.abs(offsetX) > Math.abs(offsetY)
                ? (offsetX > 0 ? 'right' : 'left')
                : (offsetY > 0 ? 'down' : 'up');
        }
        return '';
        
    };
    return(
        <div class="parent">
            <div class="div1"> 
            <section
                id='First'
                onMouseEnter={(e) => handleHover(e, 'First')}
                onMouseLeave={handleMouseLeave}
                className={`First-Image-Section ${
                    hoverDirection['First'] === 'up' ? 'fromTop' :
                    hoverDirection['First'] === 'right' ? 'fromRight' :
                    hoverDirection['First'] === 'down' ? 'fromBottom' : ''
                }`}
                style={{ backgroundImage: `url('/assets/DjoleAbout.jpg')` }}
                onClick={() => handleSectionClick('/assets/DjoleAbout.jpg')}
            >   
                    
                    <div className="image-overlay">
                        <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                    </div>
                
            </section> 
            <section id='Second' 
                onMouseEnter={(e) => handleHover(e, 'Second')}
                onMouseLeave={handleMouseLeave}
                className={`Second-Image-Section ${
                    hoverDirection['Second'] === 'up' ? 'fromTop' :
                    hoverDirection['Second'] === 'right' ? 'fromRight' :
                    hoverDirection['Second'] === 'down' ? 'fromBottom' :
                    hoverDirection['Second'] === 'left' ? 'fromLeft' : ''
                }`}
                style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} 
                onClick={() => handleSectionClick('/assets/djoleoke.jpg')}
                >
                    
                <div className="image-overlay">
                <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                </div>
                   
            </section> 
        </div>
            <div class="div2"> 
                <section  id='Third' 
                onMouseEnter={(e) => handleHover(e, 'Third')}
                onMouseLeave={handleMouseLeave}
                className={`First-Image-Section ${
                    hoverDirection['Third'] === 'up' ? 'fromTop' :
                    hoverDirection['Third'] === 'right' ? 'fromRight' :
                    hoverDirection['Third'] === 'down' ? 'fromBottom' :
                    hoverDirection['Third'] === 'left' ? 'fromLeft' : ''
                }`} 
                style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }}
                onClick={() => handleSectionClick('/assets/DjoleAbout.jpg')}
                >
                   
                <div className="image-overlay">
                <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                </div>
                    
                </section> 
                <section  id='Fourth'
                onMouseEnter={(e) => handleHover(e, 'Fourth')}
                onMouseLeave={handleMouseLeave}
                className={`Second-Image-Section ${
                    hoverDirection['Fourth'] === 'up' ? 'fromTop' :
                    hoverDirection['Fourth'] === 'right' ? 'fromRight' :
                    hoverDirection['Fourth'] === 'down' ? 'fromBottom' :
                    hoverDirection['Fourth'] === 'left' ? 'fromLeft' : ''
                }`}
                style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }}
                onClick={() => handleSectionClick('/assets/djoleoke.jpg')}
                
                >
                    
                <div className="image-overlay">
                <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                </div>
                    
                </section>
            </div>
            <div class="div3"> 
                <section  id='Fifth' 
                style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} 
                onClick={() => handleSectionClick('/assets/djoleoke.jpg')}
                onMouseEnter={(e) => handleHover(e, 'Fifth')}
                onMouseLeave={handleMouseLeave}
                className={`${
                    hoverDirection['Fifth'] === 'up' ? 'fromTop' :
                    hoverDirection['Fifth'] === 'right' ? 'fromRight' :
                    hoverDirection['Fifth'] === 'down' ? 'fromBottom' :
                    hoverDirection['Fifth'] === 'left' ? 'fromLeft' : ''
                }`}
                >
                   
                        <div className="image-overlay">
                        <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                        </div>
                   
                </section>
            </div>
            <div class="div4">
                <section  id='Sixth' 
                onMouseEnter={(e) => handleHover(e, 'Sixth')}
                onMouseLeave={handleMouseLeave}
                className={`${
                    hoverDirection['Sixth'] === 'up' ? 'fromTop' :
                    hoverDirection['Sixth'] === 'right' ? 'fromRight' :
                    hoverDirection['Sixth'] === 'down' ? 'fromBottom' : ''
                }`}
                style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }}
                onClick={() => handleSectionClick('/assets/djoleoke.jpg')}
                >
                   
                        <div className="image-overlay">
                        <div className='Preview-Icon'>
                            <img src={GalleryIcon}>
                            </img>
                        </div>
                        <h1>Image Preview</h1>
                        </div>
                    
                </section> 
            </div>

            <div class="div5" style={{ backgroundImage: `url(/assets/DjoleAbout.jpg)` }} > </div>
            <div class="div6" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>
            <div class="div7" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>
            <div class="div8" style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }} > </div>



    



            <div className='Grid-Overlay'>
                <a class="bttn type--A" >
                    <div class="button__line"></div>
                    <div class="button__line"></div>
                    <span class="button__text"><Link to={{ pathname: "/About", search: `?param=${parameterValue}` }}>Gallery</Link></span>
                    <div class="button__drow1"></div>
                    <div class="button__drow2"></div>
                </a>
            </div>
            {modalVisible && (
                <div className="modal-image" >
                    <div style={{ backgroundImage: `url(${modalImageUrl})` }}>
                        <button onClick={closeModal}>Close Image</button>
                    </div>
                    
                   
                </div>
            )}
        </div>

        
    )
}
export default LGallery