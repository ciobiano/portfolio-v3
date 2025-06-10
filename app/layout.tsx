import Navbar from "../components/navbar/Navbar";
import { Footer } from "../components/sections/footer/Footer";
import { Container } from "../components/utils/container";
import "./globals.css";
import localFont from "next/font/local";

const Satochi = localFont({
	src: [
		{
			path: "../public/Fonts/Satoshi-Medium.ttf",
			weight: "600",
		},
		{
			path: "../public/Fonts/Satoshi-Regular.ttf",
			weight: "400",
		},
		{
			path: "../public/Fonts/Satoshi-Bold.ttf",
			weight: "700",
		},
		{
			path: "../public/Fonts/Satoshi-Black.ttf",
			weight: "800",
		},
	],
	variable: "--font-Satochi",
});

export const metadata = {
	metadataBase: new URL("https://nextjs13-seo.vercel.app"),
	title: {
		default: "biano Raph",
		template: `%s | Obiano Raph`,
	},
	description:
		"This portfolio represents the work of Raph Obiano, a designer and developer based in Lagos, Nigeria.",
	// verification: {
	// 	google: "google-site-verification=123123123",
	// },
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</head>

			<body className={Satochi.className}>
				<div>
					<Navbar />
					<main className="bg-hero-gradient pt-[var(--nav-height)]">
						{children}
					</main>

					<Footer />
				</div>
			</body>
		</html>
	);
}
