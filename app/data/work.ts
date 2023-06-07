import {
	gitHubOutline,
	mdiInstagram,
	twitterOutline,
} from "@/app/components/icons/mdi";

import TruceLogo from '@/public/images/truce.svg'

export const SocialMedia = [
	{
		name: "Twitter",
		link: "https://twitter.com/BartoszJarocki",
		icon: twitterOutline,
	},
	{
		name: "Instagram",
		link: "https://www.instagram.com/bartosz.jarocki/",
		icon: mdiInstagram,
	},
	{
		name: "Github",
		link: "https://github.com/BartoszJarocki",
		icon: gitHubOutline,
	},
];

export const Work = [
	{
		company: "Parabol",
		title: "Full Stack Developer",
		logo: TruceLogo,
		start: "2021",
		end: "Present",
	} as const,
	{
		company: "Clevertech",
		title: "Lead Android Developer → Full Stack Developer",
		logo: TruceLogo,
		start: "2015",
		end: "2021",
	},
	{
		company: "Jojo Mobile",
		title: "Android Developer → Lead Android Developer",
		logo: TruceLogo,
		start: "2012",
		end: "2015",
	},
	{
		company: "Nokia Siemens Networks",
		title: "C/C++ Developer",
		logo: TruceLogo,
		start: "2010",
		end: "2012",
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
