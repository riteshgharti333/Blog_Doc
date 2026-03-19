import type { NextConfig } from "next";
import createMDX from '@next/mdx'

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"],
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)