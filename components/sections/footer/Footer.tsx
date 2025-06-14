"use client ";

import {
	gitHubOutline,
	linkedInOutline,
	twitterOutline,
} from "@/components/icons/mdi";

import Link from "next/link";
import { Logo } from "../../utils/Logo";
import { Container } from "../../utils/container";
import { Icon } from "@mdi/react";

const footerLinks = [
	{
		title: "Navigation",
		links: [
			{ title: "About", href: "/about" },
			{ title: "Projects", href: "/project" },
			{ title: "Blog", href: "/blog" },
			{ title: "Contact", href: "/" },
		],
	},
	
	{
		title: "Connect",
		links: [
			{ title: "Twitter", href: "https://twitter.com/obiano_ralph" },
			{ title: "GitHub", href: "https://github.com/ciobiano" },
			{ title: "LinkedIn", href: "https://www.linkedin.com/in/ciobiano/" },
		],
	},
];

const IconLink = [
	{
		iconPath:
			"M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.05C2.38,12.15 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z",
		href: "https://twitter.com/obiano_ralph",
		color: "#1DA1F2",
	},
	{
		iconPath:
			"M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z",
		href: "https://www.instagram.com/",
		color: "#E4405F",
	},
	{
		iconPath:
			"M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z",
		href: "https://github.com/ciobiano",
		color: "#333",
	},
];

export const Footer = () => (
	<footer className="mt-12 border-t border-transparent-white py-12 sm:py-16 lg:py-[5.6rem] mx-auto text-xs">
		<Container className="flex flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between">
			<div className="flex flex-col text-sm w-full lg:w-1/2">
				<div className="flex flex-col max-w-md text-grey">
					<div className="flex items-center mb-4">
						<Logo className="mr-3 h-4 w-4" />
						
					</div>
					<p className="mb-6 leading-relaxed">
						Full-stack developer passionate about creating innovative digital
						solutions. Always open to new opportunities and collaborations.
					</p>
				</div>
				<div className="flex gap-4 text-grey">
					{IconLink.map((icon, index) => (
						<Link
							key={index}
							href={icon.href}
							className="p-2 rounded-full hover:bg-white/10 transition-colors touch-manipulation"
							aria-label={`Follow on ${
								icon.href.includes("twitter")
									? "Twitter"
									: icon.href.includes("instagram")
									? "Instagram"
									: "GitHub"
							}`}
						>
							<Icon path={icon.iconPath} color={icon.color} size={1} />
						</Link>
					))}
				</div>
			</div>

			<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
				{footerLinks.map((column) => (
					<div key={column.title} className="flex flex-col">
						<h3 className="mb-3 sm:mb-4 font-medium text-white text-sm">
							{column.title}
						</h3>
						<ul className="space-y-2 sm:space-y-3">
							{column.links.map((link) => (
								<li key={link.title}>
									<Link
										className="text-zinc-400 hover:text-off-white transition-colors text-sm py-1 block touch-manipulation"
										href={link.href}
									>
										{link.title}
									</Link>
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</Container>
	</footer>
);
