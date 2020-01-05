import React from 'react';
import NextApp, { Container } from 'next/app';
import AppLeft from '../components/AppLeft';


export default class App extends NextApp {
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

          #__next {
            display: flex;
            width: 100%;
            height: 100%;
          }

          .main {
            flex: 2;
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
