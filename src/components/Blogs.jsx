import React, { useState, useEffect } from 'react';

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = () => {
      fetch(`https://newsapi.org/v2/everything?q=renting culture&sortBy=publishedAt&apiKey=96c10e88504341f9add134e39524783a&_=${new Date().getTime()}`)
        .then(response => response.json())
        .then(data => {
          if (data && Array.isArray(data.articles)) {
            setArticles(data.articles);
          } else {
            setArticles([]);
          }
        })
        .catch(error => {
          console.error('Error fetching the news:', error);
          setArticles([]);
        });
    };

    fetchNews();
    const interval = setInterval(fetchNews, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {articles.length > 0 ? (
        articles.map((article, index) => (
          (article.title && article.description) && (
            <div key={index} className="card bg-white rounded-lg shadow-lg overflow-hidden">
              {article.urlToImage && (
                <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover"/>
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="text-gray-600 mt-2">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-4 block">
                  Read more
                </a>
              </div>
            </div>
          )
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-full">No articles found.</p>
      )}
    </div>
  );
};

export default Blogs;
