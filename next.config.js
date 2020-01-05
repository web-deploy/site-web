// next.config.js
const withLess = require('@zeit/next-less')

module.exports = withLess(
  {
    distDir: 'dist',
    serverRuntimeConfig: {
        PORT: 3003,
    }
  }
)
