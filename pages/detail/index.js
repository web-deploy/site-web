import React from 'react';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Markdown from 'react-markdown';
import axios from '../../utils/axios';
import { convertTime } from '../../utils';

import './index.less'

const Detail = ({ article }) => {
  const { title, content, createdAt } = article;
  return (
    <div className="article-wrap">
      <Head>
        <title>{title}</title>
      </Head>
      <h1 className="title">{title}</h1>
      <div className="publish-time">
        {convertTime(new Date(createdAt).getTime())} 发布
      </div>
      <Markdown source={content} />
    </div>
  )
}

Detail.getInitialProps = async (context) => {
  const { articleId } = context.query;
  const article = await axios.get(`/article/${articleId}`);
  return { article }
}

export default withRouter(Detail);
