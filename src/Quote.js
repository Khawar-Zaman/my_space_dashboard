// /* Quote.js */

import React, { useState, useEffect } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = 'af7b6f26c0d2f8f77b277c9e24f8a951'; // Replace this

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.api-ninjas.com/v1/quotes?category=inspirational',
        // 'https://api.quotable.io/random',
        {
          headers: { 'X-Api-Key': API_KEY }
        }
      );
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setQuote(data[0]);
      } else {
        // setQuote({ quote: 'No quote found.', author: 'Unknown' });
        setQuote({ quote: "The will of man is his happiness.",
                   author: "Friedrich Schiller",
                   category: "happiness"});
      }
    } catch (error) {
      console.error("Failed to fetch quote:", error);
      setQuote({ quote: 'Could not retrieve a quote.', author: 'System' });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="card quote-generator">
      {loading ? (
        <p>Loading quote...</p>
      ) : (
        <blockquote>
          "{quote?.quote || 'No quote available'}"
          <footer>" {quote?.author || 'Unknown'} " , " {quote?.category || 'Unknown'} "</footer>
        </blockquote>
      )}
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? 'Loading...' : 'New Quote'}
      </button>
    </div>
  );
};

export default Quote;
