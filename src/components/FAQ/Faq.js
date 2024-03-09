import React from "react"
import { useState, useEffect } from 'react';
import './Faq.css'
function Faq(){
    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (itemId) => {
        setSelectedQuestion(itemId === selectedQuestion ? null : itemId);
    };
    return(
        <div className="Faq-Container" >
            <div className="Faq-Banner">
                <div className="Faq-Banner-Title">
                    <div>

                    </div>
                    <h2>FAQ</h2>
                </div>
                <h1>
                    Cesto postavljana pitanja
                </h1>
            </div>

            <div className="Questions">
                <div className="Question-Item" id="First-Item" data-aos = "fade-right">
                    <h1 onClick={() => handleQuestionClick('First-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                   
                        <div className={selectedQuestion === 'First-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                    
                </div>
               
                <div className="Question-Item" id="Second-Item" data-aos = "fade-right">
                <h1 onClick={() => handleQuestionClick('Second-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Second-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>

                <div className="Question-Item" id="Third-Item" data-aos = "fade-right"> 
                    <h1 onClick={() => handleQuestionClick('Third-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Third-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>

                <div className="Question-Item" id="Fourth-Item" data-aos = "fade-right">
                <h1 onClick={() => handleQuestionClick('Fourth-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Fourth-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>

                <div className="Question-Item" id="Fifth-Item" data-aos = "fade-right">
                <h1 onClick={() => handleQuestionClick('Fifth-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Fifth-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>

                <div className="Question-Item" id="Sixth-Item" data-aos = "fade-right">
                <h1 onClick={() => handleQuestionClick('Sixth-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Sixth-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>

                <div className="Question-Item" id="Seventh-Item" data-aos = "fade-right">
                <h1 onClick={() => handleQuestionClick('Seventh-Question')}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum?
                    </h1>
                    <div className="Item-hr">

                    </div>
                    <div className={selectedQuestion === 'Seventh-Question' ? 'Answer open' : 'Answer'}>
                            <h2>This is answer to the question bitch</h2>
                            <button>Learn more</button>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Faq