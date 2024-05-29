module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/CVwebsite/' // Vervang 'cvwebsite' door de naam van je repository
    : '/'
}
