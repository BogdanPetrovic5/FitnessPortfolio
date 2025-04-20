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
    // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    // let [LowerEdge, setLowerEdge] = useState(windowWidth <= 839 ? 0 : 0);
    // let [HigherEdge, setHigherEdge] = useState(windowWidth <= 839 ? 1 : 3);
    const targetDivRef = useRef(null);
    // let step = windowWidth <= 839 ? 1 : 3; 
    
    // useEffect(() => {
    //     const handleResize = () => {
    //     setWindowWidth(window.innerWidth);
    //     setWindowHeight(window.innerHeight);
    //     };
      
    //     window.addEventListener('resize', handleResize);
        
        
    //     return () => {
    //     window.removeEventListener('resize', handleResize);
    //     };
    // }, []);
    // const updateEdges = (direction) => {
    //     if (direction === 'next' && HigherEdge < articlesData.length) {
    //       setLowerEdge(LowerEdge + step);
    //       setHigherEdge(HigherEdge + step);
    //     } else if (direction === 'prev' && LowerEdge > 0) {
    //       setLowerEdge(LowerEdge - step);
    //       setHigherEdge(HigherEdge - step);
    //     }else if(direction === 'prev' && LowerEdge == 0){
    //         setLowerEdge(articlesData.length - step)
    //         setHigherEdge(articlesData.length)
    //     }else if(direction === 'next' && HigherEdge == articlesData.length){
    //         setLowerEdge(0)
    //         setHigherEdge(0 + step)
    //     }
       
    //   };
    useEffect(() => {
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

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const sliderRef = useRef(null)   
    const lastItemRef = useRef(null);
    
    const [containerWidth, setContainerWidth] = useState(0);
    const [itemWidth, setItemWidth] = useState(0)
    const [sliderWidth, setSliderWidth] = useState(0);
    const itemWrapper = useRef(null); 

    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [currentMargin, setCurrentMargin] = useState(0);
    const [startX, setStartX] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const [minMargin, setMinMargin] = useState(0);
    const onPanStart = (e) =>{

        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setCurrentMargin(marginLeft);
    }

    const onPanMove = (e) =>{
        if(!isDragging) return;

        const delta = (e.touches[0].clientX - startX) * 1.3;
        const potentialMargin = currentMargin + delta;
        const maxMargin = 0;
        const minMarginResult = calculateMinMargin();
        const newMinMargin = -(articlesData.length-1) * itemWidth;
        setMinMargin(newMinMargin)
        if (minMarginResult === false && delta < 0) {
          return; 
        }

        const finalMargin = Math.max(minMargin, Math.min(maxMargin, potentialMargin)); 
        setMarginLeft(finalMargin);
        updateSliderTransform(false, finalMargin);
    }

    const calculateMinMargin = (e) =>{
      const step = Math.floor(sliderWidth / itemWidth);
        const sliderList = document.getElementById('item')?.getBoundingClientRect();
        const lastItem = lastItemRef.current?.getBoundingClientRect();
        
        if(!sliderList || !lastItem){
            return true
        }
        const sliderListRight = parseFloat(sliderList.right.toFixed(1));
        const lastItemRight = parseFloat(lastItem.right.toFixed(1));
        console.log(sliderListRight)
        console.log(lastItemRight)
        if (lastItemRight <= sliderListRight) {
          
            return false;
        }
        
          setMinMargin(-(articlesData.length - 1) * (containerWidth+ (20 * (step)))) 
          return true;
    }
    const onPanEnd = (e) => {
        const step = Math.floor(sliderWidth / itemWidth);
        setIsDragging(false)
        const threshold = containerWidth * 0.7
        const delta = e.changedTouches[0].clientX - startX
        let newIndex = index;
        if (delta < -threshold && index < articlesData.length - 1) {
          newIndex = index + 1;
        
       
      } else if (delta > threshold && index > 0) {
        newIndex = index - 1;
      
      }
      const newMarginLeft = -newIndex * (containerWidth + (20 * step));
      setIndex(newIndex);
      setMarginLeft(newMarginLeft);
      updateSliderTransform(true, newMarginLeft);
    };
    const updateSliderTransform = (smooth, margin) => {
        if (sliderRef.current) {
          sliderRef.current.style.transition = smooth ? 'transform 0.2s ease-out' : 'none';
          sliderRef.current.style.transform = `translateX(${marginLeft}px)`;
        }
      };
    
    const next = () =>{
      const maxMargin = itemWidth * articlesData.length
      const step = Math.floor(sliderWidth / itemWidth);
      if(Math.abs(marginLeft) + containerWidth <= maxMargin){
        const newMargin = marginLeft - (containerWidth + (20*step))
        console.log(newMargin)
        setMarginLeft(newMargin);
        updateSliderTransform(true,newMargin);
      }
      
    }
    const prev = () =>{
      const step = Math.floor(sliderWidth / itemWidth);
      if(Math.abs(marginLeft) - containerWidth >= 0){
        const newMargin = marginLeft + (containerWidth + (20*step))
        console.log(newMargin)
        setMarginLeft(newMargin);
        updateSliderTransform(true,newMargin);
      }
      
     
    }
    const ArrayToShow = articlesData.slice(0, articlesData.length);
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
                        style={{ transform: `translateX(${marginLeft}px)` }}
                        
                     >
                        
                        {ArrayToShow.map((article, index) => (
                                <div className='Result-Item'  key={index} ref={index === articlesData.length - 1 ? lastItemRef : null}>
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
               
        
               <div className='Feedback-Navigation-Bar '>
                    <button className='Prev' onClick = {prev}>
                        Nazad
                    </button>
                    <button className='Next' onClick = {next}>
                        Napred
                    </button>
               </div>
            </div>
        </div>
    )
}
export default Feedback