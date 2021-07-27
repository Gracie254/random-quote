import React, { useState, useEffect } from 'react'
import { FaTwitter, FaTumblr } from 'react-icons/fa'
import quotes from './quotes'

import '../index.css'


const UseStateObject = () => {
    const [randomQuote, setRandomQuote] = useState(quotes)
     
    const myRandomQuote = () => {
        setRandomQuote([...randomQuote, newQuote])
        console.log(setRandomQuote)
    }
     useEffect(()=>{
      document.documentElement.style.setProperty('--themeColor', getRandomColor())
     })
    const newQuote = randomQuote[Math.floor(Math.random() * randomQuote.length)]


    const { id, author, quote } = newQuote
    return (

        <div key={id} id="quote-box">
            <h1 id="text">{quote}</h1>
            <section>
            <div className="footer">
                <h4 id="author">-- {author}</h4>
                <button id="new-quote" onClick={myRandomQuote}>new quote</button>
            </div>
            <div className="socials">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank">
             <FaTwitter  size="2.5em" color="#131313"/>    
            </a>
            <a href="top" target="_blank"><FaTumblr size="2.5em" color="#131313"/></a>
            </div>
            </section>
        </div>
    )
}

const getRandomColor = ()=>{
   return "#" + Math.random().toString(16).slice(2,8);
}

export default UseStateObject;