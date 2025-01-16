/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    experimental: {
        serverComponentsExternalPackages: [
            '@react-email/components',
            '@react-email/render',
            '@react-email/tailwind',
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/getFeeding', // get everything after /api/
                destination: `https://www.juicer.io/api/feeds/stadler_rail/iframe`, // send it to your API
            },
        ];
    },
};

module.exports = nextConfig;
