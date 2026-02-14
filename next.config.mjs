/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: '/valentine-day-gf',
  typescript: {
    ignoreBuildErrors: true,
  }
}

export default nextConfig

