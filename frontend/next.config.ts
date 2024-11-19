/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '185.237.204.37',
                port: '9000',
            },
        ],
        domains: ['185.237.204.37'], // Устаревший, но ещё работающий способ
    },
};

module.exports = nextConfig;
