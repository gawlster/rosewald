/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["rosewaldstudios-test.s3.us-east-2.amazonaws.com"],
    },
};

module.exports = nextConfig;
