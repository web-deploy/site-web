import React, { useState } from 'react';
import Router from 'next/router'
import {Button, List, Spin} from 'antd'
import InfiniteScroll from 'react-infinite-scroller';
import axios from '../utils/axios';
import { convertTime } from '../utils';

import './index.less';

const Index = ({ articles }) => {
  const [articleList, setArticleList] = useState(articles);
  const [loading, setLoading] = useState(false);

  const getArticleList = async () => {
    setLoading(true);
    const res = await axios.get('/article');
    setArticleList(articleList.concat(res.data.data))
    setLoading(false);
  }

  const toDetail = (articleId) => {
    Router.push(
      {
        pathname: '/detail',
        query: { articleId }
      }, `/detail/${articleId}`);
  }

  return (
    <div className="home">
      <div className="article-wrap">
        <InfiniteScroll
          initialLoad={false}
          useWindow={false}
          loadMore={getArticleList}
          pageStart={0}
          hasMore={!loading}
        >
          <Spin spinning={loading}>
            <List
              dataSource={articleList}
              renderItem={({title, description, poster, articleid, createdAt}, index) => {
                return (
                  <List.Item key={index}>
                    <div className="article-item" onClick={() => { toDetail(articleid) }}>
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
                  </List.Item>
                )
              }}
            >

            </List>
          </Spin>
        </InfiniteScroll>
      </div>
    </div>
  )
}

Index.getInitialProps = async ({ req }) => {
  const res = await axios.get('/article');
  return { articles: res.data.data }
}

export default Index;
