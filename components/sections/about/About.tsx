"use client";

import Link from "next/link";
import { Resume } from "./Resume";
import Skill from "./Skill";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Work } from "@/app/data/work";

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});

	const controls = useAnimation();

	const variants = {
		visible: { opacity: 1, scale: 1, y: 0 },
		hidden: {
			opacity: 0,
			scale: 0.65,
			y: 10,
		},
	};
	useEffect(() => {
		if (inView) {
			controls.start("visible");
		}
	}, [controls, inView]);

	return (
		<motion.div
			animate={controls}
			initial="hidden"
			variants={variants}
			transition={{ duration: 0.4, ease: "easeOut" }}
			ref={ref}
			className="mx-auto  items-start mt-[5rem] md:mt-[10rem]  max-w-[1215px]  md:grid-cols-2 grid gap-10  justify-between"
		>
			<div className="flex flex-col text-gradient  gap-3 md:text-xl text-md font-medium">
				<h1>
					Merging Creativity and Code: <br  /> 
					<span className="text-sm md:text-md ">
						A Journey into Full-Stack
					Development
						</span>
						
				</h1>
				<p className="flex text-sm mt-4   ">
					The integration of these two areas enables me to adopt a comprehensive
					approach to growth. I take into account not just the technical
					elements, but also the user experience, to ensure that the apps I
					design are both functionally powerful and visually beautiful.
				</p>
				<div className="mt-10 ">
					<Skill />
				</div>
				{/* <span className="border border-white md:w-[1215px] "></span> */}
			</div>

			<motion.div
				animate={controls}
				variants={variants}
				initial="hidden"
				transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
				ref={ref}
				className="grid justify-between ml-auto  md:grid-cols-1 "
			>
				<Resume WorkRoles={Work} />
			</motion.div>
		</motion.div>
	);
};

export default About;
