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
                source: '/api/docs/:path*', // get everything after /api/docs
                destination: `https://a.storyblok.com/f/269997/:path*`, // send it to your API
            },
        ];
    },
};

module.exports = nextConfig;
