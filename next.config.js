const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"images.unsplash.com",
			"framerusercontent.com",
			"i.scdn.co",
			"res.cloudinary.com",
		],
	},
	reactStrictMode: true,
	swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
