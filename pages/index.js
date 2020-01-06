import React from 'react';
import axios from '../utils/axios';

const Index = ({ articles }) => {
  console.log(articles);
  return (
    <div>
      <div>首页</div>
      <div>
        {
          articles.map(({ title, desc }, index) => {
            return (
              <div key={index}>
                <div>{title}</div>
                <div>{desc}</div>
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
