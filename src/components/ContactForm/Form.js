import './Form.css';
import React from 'react';
import { useState } from 'react';
function Form(){
 
  const letters = [
    { char: 'F', delay: '0' },
    { char: 'E', delay: '50' },
    { char: 'E', delay: '100' },
    { char: 'L ', delay: '150' },
    { char: 'F', delay: '200' },
    { char: 'R', delay: '250' },
    { char: 'E', delay: '300' },
    { char: 'E ', delay: '350' },
    { char: 'T', delay: '400' },
    { char: 'O', delay: '450' },
    { char: 'C', delay: '500' },
    { char: 'O', delay: '550' },
    { char: 'N', delay: '600' },
    { char: 'T', delay: '650' },
    { char: 'A', delay: '700' },
    { char: 'C', delay: '750' },
    { char: 'T ', delay: '800' },
    { char: 'M', delay: '850' },
    { char: 'E', delay: '900' },
];

      const result = [];
    
      for (let i = 0; i < letters.length; i++) {
        result.push(
          <span
            key={i}
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-delay={letters[i].delay}
          >
            {letters[i].char}
          </span>
        );
    
        if (letters[i].char === 'O' && letters[i - 1]?.char === 'T') {
          result.push(<br/>);
        }
      }
    return (

        <section className="Contact-Form" id='Form'>
          
          <div className='Contact-Form-Wrap'>
          
              <div className='Form'> 
                  <div className='Form-Name'>
                    <span id='name'>Name</span>
                    <input type='name' className='Name'></input>
                    <span id='email'>Email</span>
                    <input type='email'></input>
                  </div>
                  <div className='Form-Details'>
                    <span>
                      Message
                    </span>
                    <textarea>
                      
                    </textarea>
                  </div>
                  <div className='Button-Wrap'>
                    <button>SEND</button>
                  </div>
                  
              </div>
          </div>
          <div className='Contact-Form-Description'>
            <h1 className='Absolute'>
              KONTAKT
            </h1>
            <div className='Contact-Form-Title'>
              <div>
                
              </div>
              <h1>
                Kontakt Forma
              </h1>
            </div>
            <h1 className='Contact-Form-Description-h1'>
              Brz način da stupis u kontakt sa mnom!
            </h1>
            <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                </p>
          </div>
            
        </section>
    )
}
export default Form