import React from 'react';
import axios from '../utils/axios';
import { convertTime } from '../utils';

import './index.less';

const Index = ({ articles }) => {
  return (
    <div className="home">
      <div className="article-wrap">
        {
          articles.map(({ title, description, poster, created_at: createdAt }, index) => {
            return (
              <div className="article-item" key={index}>
                <div>
                  <div className="article-content-wrap">
                    <div className="title">{title}</div>
                    <div className="description">{description}</div>
                  </div>
                  <div className="poster">
                    <img src={poster} />
                  </div>
                </div>
                <div className="publish-date">{convertTime(createdAt)}</div>
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
