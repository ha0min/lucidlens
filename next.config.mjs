/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: `https://29pghtak5f.execute-api.us-west-2.amazonaws.com/default/:path*`,
        },
      ];
    },
  };
  
  export default nextConfig;