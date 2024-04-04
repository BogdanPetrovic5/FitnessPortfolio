import './Form.css';
import React from 'react';
import { useState } from 'react';
import dumbell from './images/dumbell.png'
import { useForm, ValidationError } from '@formspree/react';
import Submit from '../Submitted/Submit';
function Form(){
  const [state, handleSubmit] = useForm("xqkryrad");
  if (state.succeeded) {
      return <Submit></Submit>
  }
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

        <section className="Contact-Form" id='Form' data-aos="fade-up" data-aos-duration='1200'>
          
          <div className='Contact-Form-Wrap'>
          
              <form className='Form' onSubmit={handleSubmit} action='https://formspree.io/f/xqkryrad'> 
                  <div className='Form-Name'>
                    <span id='name'>Name</span>
                    <input type='name' className='Name'></input>
                    <span id='email'>Email</span>
                    <input 
                      id="email"
                      type="email" 
                      name="email"> 
                    </input> 
                    <ValidationError 
                      prefix="Email" 
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className='Form-Details'>
                    <span>
                      Message
                    </span>
                    <textarea 
                      id="message"
                      name="message">
                      
                    </textarea>
                    <ValidationError 
                      prefix="Message" 
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <div className='Button-Wrap'>
                    <button type="submit">SEND</button>
                  </div>
                  
              </form>
          </div>
          <div className='Contact-Form-Description'>
            <h1 className='Absolute'>
              KONTAKT
            </h1>
            <div className='Contact-Form-Title'>
              <div data-aos="fade-left" data-aos-duration = "800">
                
              </div>
              <h1 data-aos="fade-left" data-aos-duration = "800" className="Decoration-Titles">
                Kontakt Forma
              </h1>
            </div>
            <h1 className='Contact-Form-Description-h1 AllTitles' data-aos="fade-left" data-aos-duration = "800" data-aos-delay='100'>
              Brz način da stupis u kontakt <span>sa mnom!</span>
            </h1>
            <p data-aos="fade-left" data-aos-duration = "800">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                </p>

              <div className='Contact-Services-Titles'>
                <h1>
                  Personalni i polupersonlani Trenizni!
                </h1>
                <img src={dumbell}>
                </img>
                <h1>
                  Online Treninzi!
                </h1>
                <img src={dumbell}>
                </img>
                <h1>
                  Rehabilitacija
                </h1>
                <img src={dumbell}>
                </img>
                <h1>
                  Ishrana
                </h1>
              </div>
          </div>
       
        </section>
    )
}
export default Form