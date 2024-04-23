import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Joke.css';


function Joke() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <div className="joke-container">
      <h2 className="joke-title">Random Joke</h2>
      <p className="joke-text">{joke}</p>
      <button className="joke-button" onClick={fetchJoke}>Get Another Joke</button>
    </div>
  );
}

export default Joke;
