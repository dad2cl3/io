
module.exports = {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Iron Orange - It\'ll be fine...',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:description', property: 'og:description', content: 'Home of the best Destiny 2 clan!' },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'http://alpha.dad2cl3.com/IronOrangeNewLogo_200x200.png'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js', '~/plugins/pie.js'],
  css: [
    '~/assets/main.css',
    '~/assets/style/app.styl'
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/dotenv'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: '~/components/siteLoadingDialog.vue',
  /*
  ** Build configuration
  */
  build: {
    vendor: [
        '~/plugins/vuetify.js'
    ],
    extractCSS: true,
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
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
