/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import './src/libs/Env.mjs';
import withBundleAnalyzer from '@next/bundle-analyzer';

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
export default bundleAnalyzer({
  output: 'standalone',
  eslint: {
    dirs: ['.'],
  },
  poweredByHeader: false,
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config) => {
    // config.externals is needed to resolve the following errors:
    // Module not found: Can't resolve 'bufferutil'
    // Module not found: Can't resolve 'utf-8-validate'
    config.externals.push({
      bufferutil: 'bufferutil',
      'utf-8-validate': 'utf-8-validate',
    });

    /* eslint-disable no-param-reassign */
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    /* eslint-enable no-param-reassign */

    return config;
  },
});
