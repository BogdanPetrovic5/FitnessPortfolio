import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';




function LanguageChooser(){
    const {t,i18n} = useTranslation();
    const languageButton = useRef(null);
    const languageOptions = useRef(null);
    const blurLayer = useRef(null);
    const languages = [
      { code: 'sr', label: 'Serbian', icon: '/assets/serbia.png' },
      { code: 'en', label: 'English', icon: '/assets/united-kingdom.png' }
    ];
    const [selectedLang, setSelectedLang] = useState(languages.find(l => l.code === i18n.language) || languages[0]);
  
    const [isOpen, setIsOpen] = useState(false);
  
    const handleSelect = (lang) => {
      i18n.changeLanguage(lang.code);
      setSelectedLang(lang);
      
      setIsOpen(false);
    };
    const toggle = () =>{
      if(isOpen == true){
        languageOptions.current.classList.add("scale-down");
       
 
        setTimeout(()=>{
          setIsOpen(false);
          
        },200)
      }else{
        languageOptions.current.classList.remove("scale-down");
       
    
        setIsOpen(true);
      }
    }
    return(
        <div  className={`language ${isOpen ? 'no-radius' : ''}`} ref={languageButton} onClick={() => toggle()}>
            <figure>
              <img src={selectedLang.icon} alt="" />
            </figure>
            <div className={`blur-layer ${isOpen ? 'blur-layer-no-radius' : ''}`} ref={blurLayer}></div>
            <div className={`language-options ${isOpen ? 'open' : ''}`} ref={languageOptions}>
              {languages.map((lang) => (
                <figure key={lang.code} onClick={() => handleSelect(lang)}>
                  <img src={lang.icon} alt={lang.label} />
                </figure>
              ))}
            </div>
        </div>
    )
    
}
export default LanguageChooser