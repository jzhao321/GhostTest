const path = require("path");

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions.i18n}
 **/
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath: 'packages/ghost-test-frontend/public/locales'
  }
}

module.exports = config