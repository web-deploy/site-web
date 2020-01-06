// next.config.js
const withLess = require('@zeit/next-less')
const withFonts = require('next-fonts');
const withCSS = require('@zeit/next-css');

module.exports = withCSS(
  withLess(
    {
      distDir: 'dist',
      serverRuntimeConfig: {
          PORT: 3003,
      },
      webpack(config) {
        config.module.rules.push({
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          use: {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        })
        return config;
      }
    }
  )
)
