/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@sandeep-jaiswar/ui",
    "@sandeep-jaiswar/tokens",
    "@sandeep-jaiswar/icons",
    "@sandeep-jaiswar/utils",
  ],
};

module.exports = nextConfig;
