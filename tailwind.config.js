/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {

		extend: {
		fontFamily: {
			sans: ["var(--font-Satochi)", "sans-serif"],
		},
		fontSize: {
			xs: "1rem",
			sm: "1.2rem",
			md: "1.6rem",
			lg: "1.8rem",
			xl: ["2.2rem", "1.3"],
			"2xl": "2.4rem",
			"3xl": "2.6rem",
			"4xl": "3.2rem",
			"5xl": "4rem",
			"6xl": ["4.4rem", "1.1"],
			"7xl": ["4.8rem", "1.1"],
			"8xl": ["8rem", "1.1"],
		},
		colors: {
			transparent: "transparent",
			white: "#fff",
			"off-white": "#f7f8f8",
			background: "#000000",
			"transparent-white": "rgba(255, 255, 255, 0.05)",
			
			"transparent-black": " rgba(0, 0, 0, 0.8)",
			grey: "#858699",
			"grey-dark": "#222326",
			"primary-text": "#b4bcd0",
			"black-text": "#000",
		},
		backgroundImage: {
			"primary-gradient": "",

			"page-gradient":
				"radial-gradient(circle, rgba(31,32,32,1) 4%, rgba(0,0,0,1) 68%)",
			"hero-gradient":
				" linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.8) 100%)",
			"hero-glow": "",
			"glow-lines": "",
			"radial-faded": "",
			"glass-gradient":
				"linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
		},
		keyframes: {
			fadeOutUp: {
				"0%": {
					opacity: "1",
					transform: "translateY(0)",
				},
				"100%": {
					opacity: "0",
					transform: "translateY(-10px)",
				},
			},
			fadeInDown: {
				"0%": {
					opacity: "0",
					transform: "translateY(-10px)",
				},
				"100%": {
					opacity: "1",
					transform: "translateY(0)",
				},
			},
		},
	},
	},
	plugins: [],
};
