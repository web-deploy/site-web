import React from 'react';
import axios from '../utils/axios';

import './index.less';

const Index = ({ articles }) => {
  return (
    <div className="home">
      <div className="article-wrap">
        {
          articles.map(({ title, content, poster }, index) => {
            return (
              <div className="article-item" key={index}>
                <div className="article-content-wrap">
                  <div>{title}</div>
                  <div>{content}</div>
                </div>
                <div className="poster">
                  <img src={poster} />
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  const res = await axios.get('/article');
  console.log(res.data);
  return { articles: res.data.data }
}

export default Index;
