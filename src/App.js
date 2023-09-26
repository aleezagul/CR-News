import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const [data, setNewsData] = useState([]);

  useEffect(() => {
    fetch('https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=6328e1652eaa4cca859e9aa418e87b8e')
      .then(response => response.json())
      .then(data => {
        const articles = data.articles.map((article, index) => ({
          id: index,
          title: article.title,
          author: article.author,
          publishedAt: article.publishedAt
        }));
        setNewsData(articles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchTerm = event.target.name.value;
    console.log(searchTerm);
  };

  return (
    <div className="App">
      <header className="App-header">
        

        <form onSubmit={handleSubmit}>
          <label>
            Search:
            <input type="text" name="name" placeholder='Search for a news article' />
          </label>
          <input type="submit" value="Submit" />
        </form>

        <div className="card-container">
          {data.map(article => (
            <Card key={article.id} style={{ width: '18rem' }}>
              <Card.Header as="h5">{article.title}</Card.Header>
              <Card.Body>
                <Card.Text >{article.author}</Card.Text>
                <Card.Text >{article.publishedAt}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;