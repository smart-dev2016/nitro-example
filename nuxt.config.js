export default {
  target: 'static',

  buildModules: [
    '@nuxt/serverless'
  ],


  serverless: {
    static: [
      '/2'
    ],
    target: 'vercel',
  }
}
