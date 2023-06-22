const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ["images.unsplash.com", "framerusercontent.com", "i.scdn.co"],
	},
};

module.exports = withContentlayer(nextConfig);