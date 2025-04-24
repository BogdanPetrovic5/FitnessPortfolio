import './Feedback.css'
import Quote from './images/quotes.png'
import Man from './images/man.png'
import React, { useEffect, useState, useRef } from 'react';
import Left from './images/left.png'
import Right from './images/right.png'
import Decoration from './images/Decorations.png'
function Feedback(){
    const articlesData = [
        {
          testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Bogdan Bogdanic",
          image: './images/man.jpg',
        },
        {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Nikola Bogdanic",
          image: './images/man.jpg',
          },
        
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Strahijna Pavlovic",
          image: './images/man.jpg',
          },
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Nemanja Maksimiovic",
          image: './images/man.jpg',
          },
        
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Mladen Djokovic",
          image: './images/man.jpg',
          },
          {
            testemonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy',
          name:"Nikola Petrovic",
          image: './images/man.jpg',
          }
    ]

    const targetDivRef = useRef(null);
    
    const sliderRef = useRef(null)   
    const lastItemRef = useRef(null);
    const progressBar = useRef(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0);
    const [startY, setStartY] = useState(0)
    const itemWrapper = useRef(null); 
    const [hasEvent, setHasEvent] = useState(false)
    const [index, setIndex] = useState(1);
    const [progressBarIndex, setProgressBarIndex] = useState(0);

    const [isDragging, setIsDragging] = useState(false);
    const [currentMargin, setCurrentMargin] = useState(0);
    const [startX, setStartX] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const [minMargin, setMinMargin] = useState(0);
    
    const [isSkewed, setIsSkewed] = useState(false);
    const [delta,setDelta] = useState(0)
   
    useEffect(() => {
      const setWidths = () => {
          const holder = itemWrapper.current;
          const items = sliderRef.current?.children;
      
          if (holder && items) {
            const width = holder.offsetWidth;
            Array.from(items).forEach((item) => {
              item.style.width = `${width}px`;
            });
          }
        };
    
      setWidths();
      window.addEventListener('resize', setWidths);
    
       
      if (itemWrapper.current) {
        setContainerWidth(itemWrapper.current.offsetWidth);
      }

      if(sliderRef.current){
        
        setSliderWidth(sliderRef.current.offsetWidth)
      }
      if(lastItemRef.current){
        setItemWidth(lastItemRef.current.offsetWidth)
      }
   
      const handleResize = () => {
        if (itemWrapper.current) {
          setContainerWidth(itemWrapper.current.offsetWidth);
        }
        if(sliderRef.current){
          setSliderWidth(sliderRef.current.offsetWidth)
        }
        if(lastItemRef.current){
          setItemWidth(lastItemRef.current.offsetWidth)
        }
      };
      const handleTouchMove = (e) => {
        const touch = e.touches[0];
      
        if (Math.abs(e.touches[0].clientX - startX) > 5) {

          if (e.cancelable) {
            e.preventDefault();
          }
          if (isDragging) {
            onPanMove(e);
          }
         
        }
      };
      
      let startX = 0;

      const handleTouchStart = (e) => {
        startX = e.touches[0].clientX;
      };
  
      if (sliderRef.current) {
        sliderRef.current.addEventListener('touchstart', handleTouchStart, { passive: true}); 
        sliderRef.current.addEventListener('touchmove', handleTouchMove, { passive: false }); 
        
      }
      window.addEventListener('resize', handleResize);
      setMarginLeft(-1 * (containerWidth + 20));
      return () => {
        if (sliderRef.current){
          sliderRef.current.removeEventListener('touchstart', handleTouchStart);
          sliderRef.current.removeEventListener('touchmove', handleTouchMove);

        }
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('resize', setWidths)
        
      }
    }, [containerWidth, itemWrapper.current, sliderRef.current, lastItemRef.current]);

    const onPanStart = (e) =>{
      console.log("Start: ", index)
      console.log(marginLeft)
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setStartY(e.touches[0].clientY);
        setCurrentMargin(marginLeft);
        
    }

    const onPanMove = (e) =>{
        if(!isDragging) return;
  
        const touch = e.touches[0];
        const deltaX = touch.clientX - startX;
        const deltaY = touch.clientY - startY;
        const maxMargin = itemWidth * articlesData.length
      
        const threshold = 5;
        if(Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold){    
           
            const delta = (e.touches[0].clientX - startX) * 1.3;
            if(delta > 0 && marginLeft == containerWidth - 20) return
            setDelta(delta);
            setIsSkewed(true)
            const potentialMargin = currentMargin + delta;
            const newMinMargin = -(ArrayToShow.length-1) * itemWidth;
            setMinMargin(newMinMargin)
            const finalMargin = Math.max(minMargin, Math.min(maxMargin, potentialMargin)); 
            setMarginLeft(finalMargin);
            updateSliderTransform(false, finalMargin);
      
        }
    }

  
    const onPanEnd = (e) => {
      setIsSkewed(false)
      const step = Math.floor(sliderWidth / itemWidth);
      setIsDragging(false)
      
      const threshold = containerWidth * 0.1
      const delta = e.changedTouches[0].clientX - startX
      let newIndex = index;
      let newProgressBarIndex = progressBarIndex
      if (delta < -threshold) {
        if (index < articlesData.length + 1) {
          newIndex = index + 1;
          newProgressBarIndex = progressBarIndex + 1;
        } 
      }else if (delta > threshold) {
        if (index > 0) {
          newIndex = index - 1;
          newProgressBarIndex = progressBarIndex - 1;
        } 
      }
      if (newIndex === 0) {
        
         
          sliderRef.current.style.transition = "transform 0.2s ease-out"; 
          sliderRef.current.removeEventListener("transitionend", handleTransitionEndToLast);
          sliderRef.current.addEventListener("transitionend", handleTransitionEndToLast, { once: true });

        
      }

      if (newIndex === articlesData.length + 1) {
       
        sliderRef.current.removeEventListener("transitionend", handleTransitionEndToFirst);
        sliderRef.current.addEventListener("transitionend", handleTransitionEndToFirst, { once: true });
      }
      progressBar.current.classList.remove("remove-transition")
    

      const newMarginLeft = -newIndex * (containerWidth + 20);
      setIndex(newIndex);
      setProgressBarIndex(newProgressBarIndex)
      setMarginLeft(newMarginLeft);
      updateSliderTransform(true, newMarginLeft);
      

    
    };

    

    const handleTransitionEndToLast = () => {
      if (!sliderRef.current) return;
      sliderRef.current.style.transition = "none";
      const realLastIndex = articlesData.length;
      console.log(containerWidth);
      const resetMargin = -realLastIndex * (containerWidth + 20);
      console.log(resetMargin)
      sliderRef.current.style.transform = `translateX(${resetMargin}px)`;
      setIndex(realLastIndex);

      requestAnimationFrame(() => {
        setProgressBarIndex(articlesData.length - 1);
        progressBar.current.classList.add("remove-transition")
      });
      setMarginLeft(resetMargin);
      
      setHasEvent(true)
    };
    
    const handleTransitionEndToFirst = () => {
      if (!sliderRef.current) return;
      sliderRef.current.style.transition = "none";
      const resetMargin = -1 * (containerWidth + 20);
      sliderRef.current.style.transform = `translateX(${resetMargin}px)`;
      setIndex(1);
      requestAnimationFrame(() => {
        setProgressBarIndex(0);
        progressBar.current.classList.add("remove-transition")
      });
      setMarginLeft(resetMargin);
      
    };
    const updateSliderTransform = (smooth, margin) => {
      if (sliderRef.current) {
        sliderRef.current.style.transition = smooth ? 'transform 0.2s ease-out' : 'none';
        sliderRef.current.style.transform = `translateX(${margin}px)`;
      }
    };



    const next = () =>{
      const maxMargin = itemWidth * (ArrayToShow.length - 1)
      const step = Math.floor(sliderWidth / itemWidth);
      if(Math.abs(marginLeft) + containerWidth <= maxMargin){
        const newMargin = marginLeft - (containerWidth + (20))
   
        setMarginLeft(newMargin);
        updateSliderTransform(true,newMargin);
      }
      
    }
    const prev = () =>{
      const step = Math.floor(sliderWidth / itemWidth);
      if(Math.abs(marginLeft) - containerWidth >= containerWidth){
        const newMargin = marginLeft + (containerWidth + (20))
       
        setMarginLeft(newMargin);
        updateSliderTransform(true,newMargin);
      }
      
     
    }
    const ArrayToShow = [articlesData[articlesData.length - 1], ...articlesData, articlesData[0]];
    return(
        <div className="Feedback-Container">
           
            <div className='Feedback-Banner'>
                <h1 className='Absolute'>UTISCI</h1>
                <div className='Feedback-Banner-Title'>
                    <div data-aos="fade-right" data-aos-duration = "800">

                    </div>
                    <h1 data-aos="fade-right" data-aos-duration = "800" className="Decoration-Titles">
                        Utisci 
                    </h1>
                </div>
                <div className='Feedback-Banner-Description'>
                    <h1 data-aos="fade-left" data-aos-duration = "800" className='AllTitles'> Rezultati mojih klijenata</h1>
                    <img src={Decoration}>
                    </img>
                    <p >Lorem Ipsum is simply dummy text of printing and typesetting industry.</p>
                </div>
                <div className='Results-Holder' id='item' ref={itemWrapper}>
                    <div className='Results-Slider' 
                        ref={sliderRef}
                        onTouchStart={onPanStart}
                        onTouchMove={onPanMove}
                        onTouchEnd={onPanEnd}                 
                        style={{ transform: `translateX(${marginLeft}px)`}}
                     >
                        {ArrayToShow.map((article, index) => (
                                <div className='Result-Item'   key={index} ref={index === articlesData.length - 1 ? lastItemRef : null}>
                                    <div className='hr'>

                                    </div>
                                    <div className='Result-Testemonial'>
                                        <div className='Quote-Icon'>
                                            <img src={Quote}>
                                            </img>
                                        </div>
                                        <div className='Quote'>
                                            <p>
                                                {article.testemonial}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='Result-Item-Description'>
                                        <div className='Result-Item-Picture'>
                                            <img src={Man}></img>
                                        </div>
                                        <div className='Result-Item-Name'>
                                            <h2>{article.name}</h2>
                                        </div>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
               
        
               <div className='feedback-navigation-bar'>
                    <button className='prev' onClick = {prev}>
                        Nazad
                    </button>
                    <div className='progression-bar-wrapper'>
                        <div className='progression-Bar' 
                        style={{ 
                          width: `${100 / (articlesData.length)}%`, 
                          transform: `translateX(${progressBarIndex * 100}%) 
                          scaleX(${isSkewed ? 1.2 : 1})`,
                          transformOrigin: delta < 0 ? 'left' : 'right'
                        }}
                        ref={progressBar}
                        >

                        </div>
                        
                    </div>
                    <h1>swipe for more</h1>      
                    <button className='next' onClick = {next}>
                        Napred
                    </button>
               </div>
            </div>
        </div>
    )
}
export default Feedback