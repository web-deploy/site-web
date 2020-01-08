import React from 'react';
import { withRouter } from 'next/router';
import axios from '../../utils/axios';

const Detail = ({ articleId }) => {
  return (
    <div>详情{articleId}</div>
  )
}

Detail.getInitialProps = async (context) => {
  const { articleId } = context.query;
  const article = await axios.get(`/article/${articleId}`);
  console.log(article);
  return { articleId }
}

export default withRouter(Detail);
