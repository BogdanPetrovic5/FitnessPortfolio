import './LGallery.css'
import React, { useState, useEffect } from 'react';
import GalleryIcon from './gallery.png'
import Ruka from './ruka.jpeg'
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
        <div className='Gallery-Container'>
            
                <div class="parent">
                    <div className='div1'>
                        <section  id='First'
                            onMouseEnter={(e) => handleHover(e, 'First')}
                            onMouseLeave={handleMouseLeave}
                            className={`First-Section ${
                            hoverDirection['First'] === 'up' ? 'fromTop' :
                            hoverDirection['First'] === 'right' ? 'fromRight' :
                            hoverDirection['First'] === 'down' ? 'fromBottom' :
                            hoverDirection['First'] === 'left' ? 'fromLeft' : ''
                            }`}
                            style={{ backgroundImage: `url(${Ruka})` }}
                            onClick={() => handleSectionClick('/assets/djoleoke.jpg')}>
                            <div  className="image-overlay">
                                <div className='Preview-Icon'>
                                    <img src={GalleryIcon}>
                                    </img>
                                </div>
                                <h1>Image Preview</h1>
                            </div>    
                        </section>    
                    </div>
                    <div className='div2'>
                        <section  id='Second'
                            onMouseEnter={(e) => handleHover(e, 'Second')}
                            onMouseLeave={handleMouseLeave}
                            className={`Second-Section ${
                            hoverDirection['Second'] === 'up' ? 'fromTop' :
                            hoverDirection['Second'] === 'right' ? 'fromRight' :
                            hoverDirection['Second'] === 'down' ? 'fromBottom' :
                            hoverDirection['Second'] === 'left' ? 'fromLeft' : ''
                            }`}
                            style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }}
                            onClick={() => handleSectionClick('/assets/djoleoke.jpg')}>
                            <div  className="image-overlay">
                                <div className='Preview-Icon'>
                                    <img src={GalleryIcon}>
                                    </img>
                                </div>
                                <h1>Image Preview</h1>
                            </div>  
                        </section>    
                    </div>
                    <div className='div3'>
                        <section  id='Third'
                            onMouseEnter={(e) => handleHover(e, 'Third')}
                            onMouseLeave={handleMouseLeave}
                            className={`Third-Section ${
                            hoverDirection['Third'] === 'up' ? 'fromTop' :
                            hoverDirection['Third'] === 'right' ? 'fromRight' :
                            hoverDirection['Third'] === 'down' ? 'fromBottom' :
                            hoverDirection['Third'] === 'left' ? 'fromLeft' : ''
                            }`}
                            style={{ backgroundImage: `url(/assets/djoleoke.jpg)` }}
                            onClick={() => handleSectionClick('/assets/djoleoke.jpg')}>
                            <div  className="image-overlay">
                                <div className='Preview-Icon'>
                                    <img src={GalleryIcon}>
                                    </img>
                                </div>
                                <h1>Image Preview</h1>
                            </div>  
                        </section>    
                    </div>
                    
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