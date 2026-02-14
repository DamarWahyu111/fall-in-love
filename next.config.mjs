/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig

