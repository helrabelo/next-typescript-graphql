// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images')
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.NODE_ENV === 'production'

module.exports = withPlugins([
  [
    withPWA,
    {
      env: {
        GRAPHQL_HOST: process.env.GRAPHQL_HOST
      },
      pwa: {
        dest: 'public',
        disable: !isProd
      },
      images: {
        domains: ['tcgtrends.altamind.com', 'localhost']
      }
    }
  ],
  [withImages]
])
