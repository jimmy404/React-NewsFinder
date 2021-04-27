import React, {Fragment, useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import NewsList from './components/NewsList';

function App() {

  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=5bdc8077784142db9ac390ab5b8fd753`;
      const response = await fetch(url);
      const news = await response.json();
      saveNews(news.articles);
    }
    fetchAPI();
  }, [category]);

  return (
    <Fragment>
      <Header
        title='News Finder'
      />
      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
        <NewsList
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
