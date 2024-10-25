import React, { useState, useEffect } from 'react';
import { motivationalQuotes } from './quotes';


const MotivationalQuote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const data = motivationalQuotes 
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      } catch (error) {
        console.error('Error fetching quotes:', error);
      }
    };

    fetchQuotes();
  }, []);

  return (
    <div>
      <p>{`"${quote}"`}</p>
      <p>- {author}</p>
    </div>
  );
};

export default MotivationalQuote;
