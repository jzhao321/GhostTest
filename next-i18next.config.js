const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions.i18n}
 **/
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: process.env.NODE_ENV === 'development' ? 'packages/ghost-test-frontend/public/locales' : 'dist/packages/ghost-test-frontend/public/locales'
  }
}

module.exports = config