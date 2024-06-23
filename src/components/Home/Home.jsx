import  { useEffect, useState } from 'react';
import Container from '../Containers/Container';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2024-05-23&sortBy=publishedAt&apiKey={API_KEY}');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching the articles:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <Container>
      <header className="header">
        <h1>The News App</h1>
        <p>Democracy Dies in Darkness</p>
      </header>
      <nav className="navbar">
        <ul>
          <li>
            <Link className='singleTxt' to="/">Home</Link>
          </li>
          <li>
          <Link className='singleTxt' to="/politics">Politics</Link>
          </li>
          <li>
          <Link className='singleTxt' to="/opinions">Opinions</Link>
            </li>
          <li>
          <Link className='singleTxt' to="/investigations">Investigations</Link>
        </li>
          <li>
          <Link className='singleTxt' to="/tech">Tech</Link>
        </li>
          <li>World</li>
        </ul>
      </nav>
      <main className="main-content">
        <section className="main-article">
          {articles.length > 0 && (
            <>
              <h2>{articles[0].title}</h2>
              <img src={articles[0].urlToImage || 'https://via.placeholder.com/150?text=No+Image'} alt={articles[0].title} />
              <p>{articles[0].description}</p>
              <a href={articles[0].url} target="_blank" rel="noopener noreferrer">Read more</a>
            </>
          )}
        </section>
        <section className="side-articles">
          {articles.slice(1, 4).map((article, index) => (
            <div key={index} className="side-article">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <Link to={article.url}> Read more</Link>
            </div>
          ))}
        </section>
        <aside className="advertisement">
          <div className="ad-content">
            <h3>Advertisement</h3>
            <p>Your ad here</p>
          </div>
          <div className="video-section">
            <h3>Video</h3>
            {articles.slice(5).map((article, index) => (
            <div key={index} className="side-article">
              <h3>{article.title}</h3>
              <img src={article.urlToImage || 'https://via.placeholder.com/150?text=No+Image'} alt={articles[0].title} />
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
          ))}
          </div>
        </aside>
      </main>
    </Container>
  );
};

export default Home;
