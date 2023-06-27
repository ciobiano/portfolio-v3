/* eslint-disable react/no-unescaped-entities */
import { allProjects } from "contentlayer/generated";
import React from "react";
import { Container } from "../components/utils/container";
import { HeroSubtitle, HeroTitle } from "../components/sections/hero/Hero";
import { Card } from "../components/utils/Card";
import { Link } from "../components/utils/Link";

import { Article } from "./article";

export default function Project() {
	const featured = allProjects.find((project) => project.featured)!;
	const starred = allProjects.filter((project) => project);

	const sorted = allProjects
		.filter((project, index, self) => {
			// Filter out projects that are archived, have the same createdAt date as a previous project,
			// or are featured
			return (
				!project.archived &&
				self.findIndex((p) => p.createdAt === project.createdAt) === index &&
				!project.featured
			);
		})
		.sort(
			(a, b) =>
				new Date(b.createdAt ?? Number.POSITIVE_INFINITY).getTime() -
				new Date(a.createdAt ?? Number.POSITIVE_INFINITY).getTime()
		);


	return (
		<div className="relative pb-16">
			<Container className="pt-16 space-y-8">
				<div className="max-w-2xl mx-auto md:mx-0 ">
					<HeroTitle className="pb-5">Projects</HeroTitle>
					<HeroSubtitle>
						Here are some of the projects I've worked on.
					</HeroSubtitle>
				</div>
				<div className=" w-full h-px bg-transparent-white mt-16" />

				<div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 py-16 ">
					<Card>
						<Link href={""}>
							<article className="relative w-full h-full px-4 md:px-8 ">
								<div className="flex items-center justify-between gap-2">
									<div className="text-xs ">
										{featured.createdAt ? (
											<time
												dateTime={new Date(featured.createdAt).toISOString()}
											>
												{Intl.DateTimeFormat(undefined, {
													dateStyle: "medium",
												}).format(new Date(featured.createdAt))}
											</time>
										) : (
											<span>SOON</span>
										)}
									</div>
								</div>

								<h2
									id="featured-post"
									className="mt-2 text-sm font-bold text-gradient py-2 group-hover:text-white sm:text-md"
								>
									{featured.title}
								</h2>
								<p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
									{featured.description}
								</p>
								<div className="absolute bottom-4 md:bottom-14">
									<p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
										Read more <span aria-hidden="true">&rarr;</span>
									</p>
								</div>
							</article>
						</Link>
					</Card>
					<div className="flex flex-col w-full mx-auto gap-4 border-t border-gray lg:mx-0 lg:border-t-0">
						{starred.slice(0, 2).map((project) =>
							project ? (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							) : null
						)}
					</div>
				</div>
				<div className="hidden w-full h-px md:block bg-transparent-white" />
				<div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3 pt-5">
					<div className="grid grid-cols-1 gap-4">
						{starred
							.filter((_, i) => i % 3 === 0 && !_.featured)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{starred
							.filter((_, i) => i % 3 === 1 && !_.featured)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
					<div className="grid grid-cols-1 gap-4">
						{starred
							.filter((_, i) => i % 3 === 2 && !_.featured)
							.map((project) => (
								<Card key={project.slug}>
									<Article project={project} />
								</Card>
							))}
					</div>
				</div>
			</Container>
		</div>
	);
}
