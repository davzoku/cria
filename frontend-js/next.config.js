/** @type {import('next').NextConfig} */

// const nextConfig = {
//   reactStrictMode: false,
//   swcMinify: true,
//   basePath: process.env.NEXT_PUBLIC_BASE_PATH,
//   assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
//   images: {
//     domains: [
//       'images.unsplash.com',
//       'i.ibb.co',
//       'scontent.fotp8-1.fna.fbcdn.net',
//     ],
//     // Make ENV
//     unoptimized: true,
//   },
// };

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  skipWaiting: true,
  register: true, // Automatically register service worker  
})

module.exports = withPWA({
  // next.js config
})
