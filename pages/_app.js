import React from 'react';
import NextApp, { Container } from 'next/app';
import 'antd/dist/antd.css'
import AppLeft from '../components/AppLeft';
import axios from '../utils/axios';


export default class App extends NextApp {

  // static getInitialProps = async ({ req }) => {
  //   const res = await axios.get('/user');
  //   // console.log(res.data);
  //   return { }
  // }

  // static async getInitialProps({ req }) {
  //   const res = await axios.get('/user');
  //   console.log(res.data);
  //   return { }
  // }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <style global jsx>{`
          html, body {
            width: 100%;
            height: 100%;
          }

          * {
            margin: 0;
            padding: 0;
          }

          div {
            display: flex;
          }

          #__next {
            display: flex;
            width: 100%;
            height: 100%;
          }

          .main {
            flex: 2;
            padding: 50px;
          }
        `}</style>
        <AppLeft />
        <div className="main">
          <Component { ...pageProps } />
        </div>
        </Container>
    )
  }
}
