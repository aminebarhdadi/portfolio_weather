/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    METEOSOURCE_API_KEY: process.env.METEOSOURCE_API_KEY,
  },
}

module.exports = nextConfig 