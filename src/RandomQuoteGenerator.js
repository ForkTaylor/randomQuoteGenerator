import React, {useState} from 'react';
import quotes from './quotes.json';
import './quotes.css';


const RandomQuoteGenerator = () => {

    let random = (Math.floor(Math.random() * quotes.length));

    let [newQuote, setNewQuote] = useState(0);

    const handleNewQuote = () => {
        newQuote = random;
        setNewQuote(newQuote);
    }

    let colors = ['b-red', 'b-purple', 'b-pink', 'b-green', 'b-blue', 'b-yellow', 'b-lime', 
                  'b-rainbow', 'b-orange', 'b-dpurple', 'b-rainbow2', 'b-rainbow3'];

    let randomColors =  (Math.floor(Math.random() * colors.length));

    return (

        <div>

            <header className={`App-header ${colors[randomColors]}`}>
            
                <div className='quoteBox'>

                        <h2 className='text-quote'><i className="fas fa-quote-left"></i>{quotes[newQuote].quote}</h2>
                        <h4 className='text-author'>~{quotes[newQuote].author}</h4>

                        <button className='nextButton' onClick={ () => {
                            handleNewQuote();
                            
                        }}>
                            <i className="fas fa-random"></i>
                        </button>

                </div>

            </header>

        </div>

    );
}

export default RandomQuoteGenerator;