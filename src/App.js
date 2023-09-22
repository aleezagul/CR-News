import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=6328e1652eaa4cca859e9aa418e87b8e')
      .then(response => response.json())
      .then(response => setNewsData(response.articles)); // Set data.articles to state
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.name.value;
    console.log(searchTerm);
    // Perform any search logic you want here
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> Aleezas the best
        </p>

        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" name="name" placeholder='Search for a news article' />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div>
          {data.map(data => (
            <li key={data.id}>{data.title}, {data.author} </li>
           
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;