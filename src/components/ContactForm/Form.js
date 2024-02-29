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
            <div className='Contact-Form-Wrap' id='Form'>
                <div className='Contact-Form-Wrap-Image' style={{ backgroundImage: `url(/assets/djolololo.jpg)` }}>

                </div>
                <div className='Contact-Form-Form'>
                    <div className='Contact-Form-Form-Title'>
                        <div>

                        </div>
                        <h1>CONTACT FORM</h1>
                    </div>
                    <div class="container"> 
                    <div class="os-phrases" id="os-phrases">
                    {result}
                    </div>
                    </div>
                    <div className='Form-Inputs'>
                        <div className='Form-Inputs-Name'>
                        <div className="wave-group">
                            <input  required type="text" className="input"/>
                                <span className="bar"></span>
                                <label className="label">
                                <span className="label-char" style={{ '--index': 0 }}>N</span>
                                <span className="label-char" style={{ '--index': 1 }}>a</span>
                                <span className="label-char" style={{ '--index': 2 }}>m</span>
                                <span className="label-char" style={{ '--index': 3 }}>e</span>

                            </label>
                          </div>
                          <div className="wave-group">
                            <input required type="text" className="input"/>
                                <span className="bar"></span>
                                <label className="label">
                                <span className="label-char" style={{ '--index': 0 }}>L</span>
                                <span className="label-char" style={{ '--index': 1 }}>a</span>
                                <span className="label-char" style={{ '--index': 2 }}>s</span>
                                <span className="label-char" style={{ '--index': 3 }}>t</span>
                                <span className="label-char" style={{ '--index': 4 }}> </span>
                                <span className="label-char" style={{ '--index': 5 }}>n</span>
                                <span className="label-char" style={{ '--index': 6 }}>a</span>
                                <span className="label-char" style={{ '--index': 7 }}>m</span>
                                <span className="label-char" style={{ '--index': 8 }}>e</span>

                            </label>
                          </div>
                        </div>
                        <div className='Form-Inputs-Info'>
                        <div className="wave-group">
                            <input  required type="text" className="input"/>
                                <span className="bar"></span>
                                <label className="label">
                                <span className="label-char" style={{ '--index': 0 }}>E</span>
                                <span className="label-char" style={{ '--index': 1 }}>m</span>
                                <span className="label-char" style={{ '--index': 2 }}>a</span>
                                <span className="label-char" style={{ '--index': 3 }}>i</span>
                                <span className="label-char" style={{ '--index': 4 }}>l</span>
                            </label>
                          </div>
                          <div className="wave-group">
                            <input required type="text" className="input"/>
                                <span className="bar"></span>
                                <label className="label">
                                <span className="label-char" style={{ '--index': 0 }}>M</span>
                                <span className="label-char" style={{ '--index': 1 }}>e</span>
                                <span className="label-char" style={{ '--index': 2 }}>s</span>
                                <span className="label-char" style={{ '--index': 3 }}>s</span>
                                <span className="label-char" style={{ '--index': 4 }}>a</span>
                                <span className="label-char" style={{ '--index': 5 }}>g</span>
                                <span className="label-char" style={{ '--index': 6 }}>e</span>
                            </label>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}
export default Form