/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'localhost',
			'digitalhippo2-production.up.railway.app'
		]		
		// remotePatterns: [
		// 	{
		// 		protocol: "http",
		// 		hostname: "localhost",
		// 	},
		// 	{
		// 		protocol: "https",
		// 		hostname: "digitalhippo2-production.up.railway.app",
		// 	},
		// ],
	},
};

module.exports = nextConfig;
