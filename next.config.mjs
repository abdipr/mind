import nextra from "nextra";

const withNextra = nextra({
  // Nextra config
});

export default withNextra({
  i18n: {
    locales: ["id", "en"],
    defaultLocale: "id",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "abdi.cc",
      },
    ],
  },
});
