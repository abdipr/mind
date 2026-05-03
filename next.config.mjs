import nextra from "nextra";

const withNextra = nextra({
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abdi.cc",
      },
    ],
  },
};

export default withNextra(nextConfig);
