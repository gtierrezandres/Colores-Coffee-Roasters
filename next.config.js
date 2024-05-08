const nextConfig = {
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'] // This uses SVGR to transform SVGs into React components
    });

    // Important: return the modified config
    return config;
  },
};

module.exports = nextConfig;