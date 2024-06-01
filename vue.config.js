const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CVwebsite/' // Vervang 'CVwebsite' door de naam van je repository
    : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    // Regel voor het verwerken van PDF-bestanden
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: '[name].[hash:8].[ext]',
        outputPath: 'assets/pdf/'
      })
  },
})
