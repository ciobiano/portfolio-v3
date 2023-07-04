import {
  gitHubOutline,
  mdiInstagram,
  twitterOutline,
} from "@/app/components/icons/mdi";

import TruceLogo from "@/public/images/truce.svg";

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

export const Work: WorkRole[] = [
  {
    company: "Truce Market",
    title: "Full Stack Developer",
    logo: TruceLogo,
    start: new Date(2021, 2, 4), // March 4, 2021
    end: null,
	url: "https://www.trucemarketplace.com/",
  },
  {
    company: "Clevertech",
    title: "Lead Android Developer → Full Stack Developer",
    logo: TruceLogo,
    start: new Date(2015, 7, 9), // August 9, 2015
    end: new Date(2021, 2, 7), // March 7, 2021
	url: "https://www.clevertech.biz/",
  },
  {
    company: "Jojo Mobile",
    title: "Android Developer → Lead Android Developer",
    logo: TruceLogo,
    start: new Date(2012, 4, 2), // May 2, 2012
    end: new Date(2015, 4, 23), // May 23, 2015
	url: "https://jojomobile.pl/",
  },
  {
    company: "Nokia Siemens Networks",
    title: "C/C++ Developer",
    logo: TruceLogo,
    start: new Date(2010, 2, 18), // March 18, 2010
    end: new Date(2012, 10, 9), // November 9, 2012
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
