/* eslint-disable react/no-unescaped-entities */
import { allProjects } from "contentlayer/generated";
import React from "react";
import { Container } from "../components/utils/container";
import { HeroSubtitle, HeroTitle } from "../components/sections/hero/Hero";



export default function Project() {
	const FEATURED = allProjects.find((project) => project.slug === "featured")!;

	const starred = allProjects.find((project) => project.slug === "starred")!;

	const sorted = allProjects

		.filter(
			(project) => project.slug !== "featured" && project.slug !== "starred"
		)
		.sort((a, b) => 
			new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
		);
    






	return (
	 <div className="relative pb-16"> 
		<Container className="pt-16">
			<div className="max-w-2xl mx-auto lg:mx-0 space-y-8">
				<HeroTitle className="">
					Projects
				</HeroTitle>
				<HeroSubtitle >
					Here are some of the projects I've worked on.
				</HeroSubtitle>
			</div>
			<div className=" w-full h-px bg-grey-dark mt-16" />
		</Container>
	 </div>
	
	
	
	
	
		)




}
