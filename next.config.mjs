import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Wajib untuk OpenNext Cloudflare
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'abdi.cc',
      },
    ],
  },
}

export default withNextra(nextConfig)
