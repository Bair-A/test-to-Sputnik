import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  basePath: '/test-to-sputnik',
  output: 'export',
  images: {
    domains: ['picsum.photos']
  }
};

export default nextConfig;
