/** @type {import('next').NextConfig} */
const nextPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

const withPWA = nextPWA({
  dest: 'public',
  runtimeCaching,
});

const basePath = '/Random-Choice-PWA';

module.exports = withPWA({
  reactStrictMode: true,
  env: {
    basePath,
  },
  basePath,
  // i18n: {
  //   locales: ['en'],
  //   defaultLocale: 'en',
  // },
});
