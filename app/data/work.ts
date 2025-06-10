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
	location: string;
	locationType: "Remote" | "On-site" | "Hybrid";
	technologies?: string[];
	achievements?: string[];
	keyResponsibilities?: string[];
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
		start: new Date(2023, 2, 4), // March 4, 2023
		end: null, // Current position
		url: "https://www.trucemarketplace.com/",
		description:
			"Building comprehensive e-commerce solutions and marketplace features using modern web technologies",
		employmentType: "Contract",
		location: "Remote",
		locationType: "Remote",
		technologies: [
			"React",
			"Next.js",
			"TypeScript",
			"Node.js",
			"MongoDB",
			"Tailwind CSS",
		],
		achievements: [
			"Developed responsive web applications improving user engagement by 35%",
			"Implemented real-time features using WebSocket technology",
			"Optimized application performance resulting in 40% faster load times",
		],
		keyResponsibilities: [
			"Design and develop full-stack web applications",
			"Collaborate with design team to implement user-friendly interfaces",
			"Maintain and optimize existing codebase for better performance",
		],
	},
	{
		company: "Upwork",
		title: "Frontend Developer",
		logo: WorkLogo,
		start: new Date(2024, 4, 2), // May 2, 2024
		end: null, // Current
		url: "https://www.upwork.com/freelancers/",
		description:
			"Delivering custom web solutions for clients across various industries with focus on modern frontend technologies",
		employmentType: "Freelance",
		location: "Remote",
		locationType: "Remote",
		technologies: ["React", "JavaScript", "CSS3", "HTML5", "Figma"],
		achievements: [
			"Maintained 5-star rating with 100% client satisfaction",
			"Completed 5+ projects with total earnings of $5,000+",
			"Reduced client project turnaround time by 25% through efficient workflows",
		],
		keyResponsibilities: [
			"Build responsive and interactive web applications",
			"Convert design mockups into functional frontend code",
			"Provide ongoing maintenance and support for client projects",
		],
	},
	{
		company: "Machine & Equipment Cooperation Africa",
		title: "Innovation Technology Intern",
		logo: WorkLogo,
		start: new Date(2019, 4, 9), // May 9, 2019
		end: new Date(2021, 2, 7), // March 7, 2021
		url: "https://www.meca.com.ng",
		description:
			"Contributed to digital transformation initiatives and supported technology innovation projects in industrial equipment sector",
		employmentType: "Internship",
		location: "Abuja, Nigeria",
		locationType: "On-site",
		technologies: [
			"Python",
			"Excel",
			"Microsoft Office",
			"Database Management",
		],
		achievements: [
			"Assisted in digitizing 200+ equipment records improving data accessibility",
			"Contributed to automation project that reduced manual processing time by 30%",
			"Presented technology solutions to senior management team",
		],
		keyResponsibilities: [
			"Support digital transformation projects",
			"Assist with data analysis and reporting",
			"Research emerging technologies for industrial applications",
		],
	},
	{
		company: "Onyimart Technology",
		title: "Mobile Sales Representative",
		logo: WorkLogo,
		start: new Date(2017, 2, 18), // March 18, 2017
		end: new Date(2019, 1, 9), // February 9, 2019
		url: "https://www.nokia.com/networks/",
		description:
			"Handled mobile device sales, customer support, and technical assistance while building foundational business and communication skills",
		employmentType: "Part-time",
		location: "Owerri, Nigeria",
		locationType: "On-site",
		technologies: [
			"Customer Management Systems",
			"Point of Sale",
			"Mobile Technology",
		],
		achievements: [
			"Exceeded monthly sales targets by average of 20%",
			"Maintained customer satisfaction rating above 95%",
			"Trained 5+ new team members on product knowledge and sales techniques",
		],
		keyResponsibilities: [
			"Provide customer consultation on mobile devices and plans",
			"Process sales transactions and handle customer inquiries",
			"Maintain product knowledge and assist with technical support",
		],
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
