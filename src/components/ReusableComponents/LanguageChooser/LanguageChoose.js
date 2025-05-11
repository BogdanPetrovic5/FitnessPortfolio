import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';




function LanguageChooser(){
    const {t,i18n} = useTranslation();
    const languageButton = useRef(null);
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
    return(
        <div  className={`language ${isOpen ? 'no-radius' : ''}`} ref={languageButton} onClick={() => setIsOpen(!isOpen)}>
            <figure>
              <img src={selectedLang.icon} alt="" />
            </figure>
            <div className='blur-layer'></div>
            <div className={`language-options ${isOpen ? 'open' : ''}`}>
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