"use client";

import Link from "next/link";
import { Resume } from "./Resume";
import Skill from "./Skill";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
			className="mx-auto  items-start mt-[5rem] md:mt-[10rem]  max-w-[1215px]  md:grid-cols-2 grid gap-10 "
		>
			<div className="flex flex-col text-gradient  gap-3 md:text-xl text-md font-medium">
				<h1>
					Merging Creativity and Code: <br /> An Artful Journey into Full-Stack
					Development .
				</h1>
				<p className="flex text-sm ">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
					facilis repudiandae odit obcaecati saepe explicabo iusto doloribus
					nesciunt voluptate voluptatibus .
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
				className="grid  md:grid-cols-1 "
			>
				
				<Resume />
			</motion.div>
		</motion.div>
	);
};

export default About;
