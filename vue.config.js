const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
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
