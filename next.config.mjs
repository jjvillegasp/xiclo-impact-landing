import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin(
    './src/i18n/request.tsx');
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
};

export default withNextIntl(nextConfig);
