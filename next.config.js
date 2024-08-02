/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    // ignoreBuildErrors: true,
  },

  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    remotePatterns: [
      { hostname: "tailwindui.com" },
      { hostname: "caddy" },
      { hostname: "localhost" },
      { hostname: "pentecostes.fpinfo.com.br" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

module.exports = nextConfig;
