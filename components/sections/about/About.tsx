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
		threshold: 0.3,
		triggerOnce: true,
	});

	const controls = useAnimation();
	const resumeControls = useAnimation();

	const containerVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.1, 0.25, 1], // Custom cubic-bezier for smooth easing
				staggerChildren: 0.15,
			},
		},
		hidden: {
			opacity: 0,
			scale: 0.95,
			y: 20,
		},
	};

	const childVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.1, 0.25, 1],
			},
		},
		hidden: {
			opacity: 0,
			scale: 0.98,
			y: 15,
		},
	};

	const resumeVariants = {
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				duration: 0.7,
				ease: [0.25, 0.1, 0.25, 1],
				delay: 0.3,
			},
		},
		hidden: {
			opacity: 0,
			scale: 0.96,
			x: 30,
		},
	};

	useEffect(() => {
		if (inView) {
			controls.start("visible");
			resumeControls.start("visible");
		}
	}, [controls, resumeControls, inView]);

	return (
		<motion.div
			animate={controls}
			initial="hidden"
			variants={containerVariants}
			ref={ref}
			className="mx-auto  items-start mt-[5rem] md:mt-[10rem]  max-w-[1215px]  md:grid-cols-2 grid gap-10  justify-between"
		>
			<motion.div
				variants={childVariants}
				className="flex flex-col text-gradient  gap-3 md:text-xl text-md font-medium"
			>
				<motion.h1 variants={childVariants}>
					Merging Creativity and Code: <br />
					<span className="text-sm md:text-md ">
						A Journey into Full-Stack Development
					</span>
				</motion.h1>
				<motion.p variants={childVariants} className="flex text-sm mt-4   ">
					The integration of these two areas enables me to adopt a comprehensive
					approach to growth. I take into account not just the technical
					elements, but also the user experience, to ensure that the apps I
					design are both functionally powerful and visually beautiful.
				</motion.p>
				<motion.div variants={childVariants} className="mt-10 ">
					<Skill />
				</motion.div>
				{/* <span className="border border-white md:w-[1215px] "></span> */}
			</motion.div>

			<motion.div
				animate={resumeControls}
				variants={resumeVariants}
				initial="hidden"
				className="grid justify-between ml-auto  md:grid-cols-1 "
			>
				<Resume WorkRoles={Work} />
			</motion.div>
		</motion.div>
	);
};

export default About;
