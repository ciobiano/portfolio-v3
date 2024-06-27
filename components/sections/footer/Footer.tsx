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
		title: "Explore",
		links: [
			{ title: "About us", href: "#" },
			{ title: "Projects", href: "#" },
			{ title: "Careers", href: "#" },
			{ title: "Contact", href: "#" },
		],
	},
	{
		title: "Resources",
		links: [
			{ title: "Community", href: "#" },
			{ title: "Books", href: "#" },
			{ title: "Discord", href: "#" },
			{ title: "Terms of service", href: "#" },
		],
	},
];

const IconLink = [
	{
		iconPath: linkedInOutline,
		color: "#0A66C2",
		href: "https://www.linkedin.com/in/ralph-akpan-1b1b3b1b2/",
	},
	{
		iconPath: twitterOutline,
		color: "#1D9BF0",
		href: "https://www.linkedin.com/in/ralph-akpan-1b1b3b1b2/",
	},
	{
		iconPath: gitHubOutline,
		href: "https://www.linkedin.com/in/ralph-akpan-1b1b3b1b2/",
	},
];

export const Footer = () => (
	<footer className="mt-12 border-t border-transparent-white py-[5.6rem] mx-auto text-xs ">
		<Container className="flex flex-col justify-between lg:flex-row ">
			<div className="block  h-full md:w-1/2 flex-row lg:flex-col text-sm  ">
				<div className="block max-w-md items-center text-grey ">
					<Logo className="mr-4 h-4 w-4" />
					<p className="my-4">
						Never far from your reach, and alway delighted to hear from you.
					</p>
				</div>
				<div className="flex space-x-4 text-grey">
					{IconLink.map((icon, index) => (
						<Link key={index} href={icon.href}>
							<Icon path={icon.iconPath} color={icon.color} size={1} />
						</Link>
					))}
					{/* <TwitterIcon />
						<GithubIcon />
						<SlackIcon /> */}
				</div>
			</div>

			<div className="flex flex-wrap ">
				{footerLinks.map((column) => (
					<div
						key={column.title}
						className="mt-10 min-w-[50%] lg:mt-0 lg:min-w-[20%] gap-x-3 md:m-7"
					>
						<h3 className="mb-3 font-medium">{column.title}</h3>
						<ul>
							{column.links.map((link) => (
								<li key={link.title} className="[&_a]:last:mb-0">
									<Link
										className="mb-3 block text-zinc-400 transition-colors hover:text-off-white"
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
