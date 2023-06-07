import Navbar from "./components/navbar/Navbar";
import Footer from "./components/sections/footer/Footer";
import { Container } from "./components/utils/container";
import "./globals.css";
import localFont from "next/font/local";



const Satochi = localFont({
  src: [
    {
      path: '../public/Fonts/Satoshi-Medium.ttf',
      weight: '600'
    },
    {
      path: '../public/Fonts/Satoshi-Regular.ttf',
      weight: '400'
    },
    {
      path: '../public/Fonts/Satoshi-Bold.ttf',
      weight: '700'
    },
    {
      path: '../public/Fonts/Satoshi-Black.ttf',
      weight: '800'
    }
  ],
  variable: '--font-Satochi'
})

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
				<div >
					<Navbar />
					<main className="bg-hero-gradient pt-[var(--nav-height)]">
						{children}
					</main>
					<footer>
						<Container>
							<Footer/>
						</Container>
					</footer>
				</div>
			</body>
		</html>
	);
}
