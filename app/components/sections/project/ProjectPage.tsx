import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";
import Button from "../../utils/Button";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

type Props = {};

export const ProjectPage = (props: Props) => {
	return (
		<section className="flex flex-col pt-28 lg:pt-72 items-center justify-center mx-auto ">
			<div className="grid w-full max-h-min grid-cols-1 grid-rows-12 place-content-center place-items-center gap-x-5 gap-y-7 md:gap-y-10 md:grid-cols-2 md:grid-rows-2">
				{projects.map((project, index) => {
					return (
						<ProjectCard
							key={index}
							img={project.img}
							title={project.title}
							creator={project.creator}
							link={project.link}
							available={project.available}
						/>
					);
				})}
			</div>

			<div className="text-sm flex self-end mt-10 ">
				<Button href="#" variant="secondary" size="small">
					Read More <BsFillArrowRightCircleFill size={20}/>
				</Button>
			</div>
		</section>
	);
};
