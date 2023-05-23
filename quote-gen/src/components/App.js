import './App.css';
import Instructions from './Instructions'; //component import 
import React from 'react';

const displayQuote = event => alert(event.target.id);
const quotes = [
  {
    name:"Quote-1",
    text: "How far that little candle throws its beams! So shines a good deed in a naughty world."
  },
  {
    name:"Quote-2",
    text: "All is flux, nothing stays still."
  },
  {
    name:"Quote-3",
    text: "Intuition will tell the thinking mind where to look next."
  }
];

function App() {
  const greeting = "greeting"; //variable called greeting with the value greeting
  //aria-label is for screen readers
  return (
    <div className="main">
   <h1 id={greeting}> Quote Generator</h1>
   <p>Quotes to change your life.</p>
   <Instructions /> 
   <ul>
  {    
    quotes.map(quote => (
      <li key={quote.name}>
        <button onClick={displayQuote}>
          <span aria-label={quote.name} id={quote.text}>
            {quote.name}
            </span>
        </button>
      </li>
    )
    )
  }
   </ul>
   </div>
  )
}

export default App;
