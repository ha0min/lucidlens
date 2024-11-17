/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/backend/api/:path*',
          destination: `https://29pghtak5f.execute-api.us-west-2.amazonaws.com/default/:path*`,
        },
      ];
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'dreamsimg.s3.us-west-2.amazonaws.com',
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;