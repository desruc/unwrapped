/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com"
      },
      {
        protocol: "https",
        hostname: "i.scdn.co"
      }
    ]
  }
};

module.exports = nextConfig;
