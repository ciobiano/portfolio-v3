import React from "react";
import { Container } from "@/components/utils/container";
import { AboutHeroSection } from "../../../components/about/hero-section";
import { ExperienceSection } from "../../../components/about/experience";
import { Work } from "../../../data/work";
import Skill from "../../../components/sections/about/Skill";

type Props = {};

export async function generateMetadata() {
	return {
		title: "About",
		description: "A full datiled profile on me",
	};
}

export default function AboutPage(props: Props) {
	return (
		<main className="py-16">
			<Container>
				<AboutHeroSection />
				<ExperienceSection WorkRoles={Work} />
				<Skill />
			</Container>
		</main>
	);
}
