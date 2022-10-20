const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions.i18n}
 **/
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: path.resolve('./packages/ghost-test-frontend/public/locales')
  }
}

module.exports = config