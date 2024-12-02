/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.flyonui.com',
                port: '',
                pathname: '/**',
            },
        ],
},
};

export default nextConfig;
