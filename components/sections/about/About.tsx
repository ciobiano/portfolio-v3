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
		threshold: 0.2,
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
				ease: [0.25, 0.1, 0.25, 1],
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
			className="mx-auto px-4 sm:px-6 items-start mt-16 sm:mt-20 md:mt-[10rem] max-w-[1215px] grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 justify-between"
		>
			<motion.div
				variants={childVariants}
				className="flex flex-col text-gradient gap-4 text-base sm:text-lg md:text-xl font-medium order-2 lg:order-1"
			>
				<motion.h1
					variants={childVariants}
					className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-tight"
				>
					Merging Creativity and Code: <br />
					<span className="text-sm sm:text-base md:text-lg text-zinc-400">
						A Journey into Full-Stack Development
					</span>
				</motion.h1>
				<motion.p
					variants={childVariants}
					className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed max-w-2xl"
				>
					The integration of these two areas enables me to adopt a comprehensive
					approach to growth. I take into account not just the technical
					elements, but also the user experience, to ensure that the apps I
					design are both functionally powerful and visually beautiful.
				</motion.p>
				<motion.div variants={childVariants} className="mt-8 lg:mt-10">
					<Skill />
				</motion.div>
			</motion.div>

			<motion.div
				animate={resumeControls}
				variants={resumeVariants}
				initial="hidden"
				className="flex justify-center lg:justify-end order-1 lg:order-2"
			>
				<Resume WorkRoles={Work} />
			</motion.div>
		</motion.div>
	);
};

export default About;
