import {
	gitHubOutline,
	mdiInstagram,
	twitterOutline,
} from "@/components/icons/mdi";

import WorkLogo from "@/public/images/truce.svg";

export interface WorkRole {
	company: string;
	title: string;
	logo: string;
	start: Date;
	end: Date | null;
	url: string;
	description?: string;
	employmentType:
		| "Full-time"
		| "Part-time"
		| "Contract"
		| "Internship"
		| "Freelance";
}

export const SocialMedia = [
	{
		name: "Twitter",
		link: "https://twitter.com/obiano_raph",
		icon: twitterOutline,
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/",
		icon: mdiInstagram,
	},
	{
		name: "Github",
		link: "https://github.com/ciobiano",
		icon: gitHubOutline,
	},
];

export const Work: WorkRole[] = [
	{
		company: "Truce Market",
		title: "Full Stack Developer",
		logo: WorkLogo,
		start: new Date(2023, 2, 4), // March 4, 2022
		end: null, // Current position
		url: "https://www.trucemarketplace.com/",
		description:
			"Building end-to-end web applications using modern technologies",
		employmentType: "Contract",
	},
	{
		company: "Upwork",
		title: "Frontend Developer",
		logo: WorkLogo,
		start: new Date(2024, 4, 2), // May 2, 2024
		end: null, // Current
		url: "https://www.upwork.com/freelancers/",
		description: "Developed responsive web applications for various clients",
		employmentType: "Freelance",
	},
	{
		company: "Machine & Equipment Cooperation Africa",
		title: "Innovation Technology Intern",
		logo: WorkLogo,
		start: new Date(2019, 4, 9), // May 9, 2019
		end: new Date(2021, 2, 7), // March 7, 2021
		url: "https://www.meca.com.ng",
		description:
			"Contributed to technology innovation projects and digital transformation initiatives",
		employmentType: "Internship",
	},
	{
		company: "Onyimart Technology",
		title: "Mobile Sales Representative",
		logo: WorkLogo,
		start: new Date(2017, 2, 18), // March 18, 2017
		end: new Date(2019, 1, 9), // February 9, 2019
		url: "https://www.nokia.com/networks/",
		description: "Handled mobile device sales and customer support",
		employmentType: "Part-time",
	},
];

export const CompaniesLinks = [
	{
		name: "VisionMedia",
		link: "https://www.visionmedia.com/",
	},
	{
		name: "DKMS",
		link: "https://www.dkms.org/en",
	},
	{
		name: "AAA",
		link: "https://www.aaa.com/",
	},
	{
		name: "PolskaPress",
		link: "https://polskapress.pl/pl",
	},
	{
		name: "Canal Digital",
		link: "https://www.canaldigital.no/",
	},
];
