/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // swcMinify: false,

  // webpack(config, { isServer }) {
  //   // config.optimization.minimize = false;

  //   // if (!isServer) {
  //   //   config.module.rules.push({
  //   //     // Note: loader functions should have a `*ServerComponent/loader.ts` path
  //   //     // to avoid being excluded by this rule.
  //   //     test: /ServerComponent\/index/,
  //   //     use: "null-loader",
  //   //   });
  //   // }

  //   return config;
  // },
};

module.exports = nextConfig;