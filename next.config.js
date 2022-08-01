/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.youtube.com']
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source'
    })

    return config
  },
  experimental: { images: { allowFutureImage: true } }
}

module.exports = nextConfig
