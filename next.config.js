/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const basePath = '/Random-Choice-PWA';

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  reactStrictMode: true,
  env: {
    basePath,
  },
  basePath,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
});
