import {
  gitHubOutline,
  mdiInstagram,
  twitterOutline,
} from "@/app/components/icons/mdi";

import WorkLogo from "@/public/images/truce.svg";

export interface WorkRole {
  company: string;
  title: string;
  logo: string;
  start: number | Date;
  end: number | Date | null ;
  url: string;
}

export const SocialMedia = [
  {
    name: "Twitter",
    link: "https://twitter.com/obiano_ralph",
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
    start: new Date(2022, 2, 4), // March 4, 2021
    end: null,
	url: "https://www.trucemarketplace.com/",
  },
  {
    company: "Freelance",
    title: "Frontend Developer",
    logo: WorkLogo,
    start: new Date(2021, 4, 2), // May 2, 2012
    end: new Date(2022, 1, 23), // May 23, 2015
    url: "https://portfolio-v3-ochre.vercel.app",
  },
  {
    company: "Machine & Equipment cooperation Africa",
    title: "Intern Innovation Technology",
    logo: WorkLogo,
    start: new Date(2019, 4, 9), // April 9, 2015
    end: new Date(2021, 2, 7), // March 7, 2021
  url: "https://www.meca.com.ng",
  },
  {
    company: "Onyimart technology",
    title: "Mobile Sales person",
    logo: WorkLogo,
    start: new Date(2017, 2, 18), // March 18, 2017
    end: new Date(2019, 1, 9), // November 9, 2019
	url: "https://www.nokia.com/networks/",
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
