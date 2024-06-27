import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";
import { Button, Highlight } from "../../utils/Button";

type Props = {};

export const ProjectPage = (props: Props) => {
	return (
		<section className="flex flex-col pt-28 lg:pt-[14rem] items-center justify-center mx-auto  ">
			<div className="grid w-full max-h-min grid-cols-1 grid-rows-12 place-content-center place-items-center gap-x-5 gap-y-7 md:gap-y-10 md:grid-cols-2 md:grid-rows-2 ">
				{projects.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							img={project.img}
							title={project.title}
							creator={project.creator}
							link={project.link}
							available={project.available}
							video={project.video}
						/>
					);
				})}
			</div>

			<div className="text-sm flex self-end mt-5  items-center ">
				<Button href="#" variant="secondary" size="small" className="my-auto ">
					Read More <Highlight>→</Highlight>
				</Button>
			</div>
		</section>
	);
};
