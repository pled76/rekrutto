const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }
    ]
  },
  loading: false,
  css: [],
  plugins: [
    { src: '~/plugins/index.js', ssr: false }
  ],
  buildModules: [],
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],
  styleResources: {
    scss: ['~/assets/scss/_global.scss']
  },
  sitemap: {
    hostname: 'https://www.rekrutto.ru',
    gzip: true,
  },
  build: {
    vendor: [],
    postcss: [
      require('autoprefixer')({
        browsers: ['> 1%', 'last 10 versions']
      }),
      require('css-mqpacker')()
    ],
    generate: {
      minify: {
        collapseWhitespace: false
      }
    },

    extractCSS: {
      allChunks: true
    },

    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
          terserOptions: {}
        }),
      ],
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {}
      }
    },

    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
