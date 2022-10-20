const path = require('path');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions.i18n}
 **/
const config = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localePath:
      process.env.NODE_ENV === 'development'
        ? path.resolve('./packages/ghost-test-frontend/public/locales')
        : path.resolve('./locales'),
  },
};

module.exports = config;
