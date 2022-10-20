const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: path.resolve('./packages/ghost-test-frontend/public/locales')
  }
}