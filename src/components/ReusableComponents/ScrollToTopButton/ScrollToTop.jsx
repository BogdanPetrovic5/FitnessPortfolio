import { useEffect, useRef, useState } from "react";
function ScrollToTop(){
    const [isVisible, setIsVisible] = useState(false);
    const scrollToTopRef = useRef(null);
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' 
        });
      };
    useEffect(()=>{
        
        const toggleVisibility = () => {
            if (window.scrollY > 300 && !isVisible) {
            
                setIsVisible(true);
             

               
            } else if (window.scrollY <= 300 && isVisible) {
                scrollToTopRef.current.classList.add("animate__animated", "animate__bounceOutDown")
                setTimeout(() => {
                    setIsVisible(false);
                },500);
                
            
            }
        };
        
            window.addEventListener('scroll', toggleVisibility);
            return () =>{
            window.removeEventListener('scroll', toggleVisibility)
        }
    },[isVisible])
    if (!isVisible) {
        return null; 
    }
    
    return(
        <div className='scroll-to-top animate__animated animate__bounceInUp'  ref={scrollToTopRef} onClick={scrollToTop}>
                <img src='/assets/up-arrow.png'/>
        </div>
    )
}
export default ScrollToTop;