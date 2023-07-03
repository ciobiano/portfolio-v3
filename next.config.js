const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com", "framerusercontent.com", "i.scdn.co"],
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withContentlayer(nextConfig);