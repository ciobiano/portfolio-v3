"use client";

import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {  motion, useAnimation } from "framer-motion";

interface ProjectCardProps {
	img: string;
	title: string;
	creator: string;
	link: string;
	video?: boolean;
	available?: boolean;
}
 
const wrapperVariants = {
	initial: {
		clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
		transition: { duration: 0.4 },
	},
	animate: {
		clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
		transition: { duration: 0.4, staggerChildren: 0.1 },
	},
	exit: {
		clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
		transition: { duration: 0.4 },
	},
};

const ProjectCard: React.FC<ProjectCardProps> = ({
	img,
	title,
	link,
	video,
	available,
	creator,
}) => {
	const [isHovered, setIsHovered] = useState(false);
	const  controls = useAnimation();
	const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

	useEffect(() => {
		if (inView) {
			controls.start("animate");
		}
	}
	, [controls, inView]);

	return (
		<motion.div
			animate={{ x: 0, opacity: 1 }}
			initial={{ x: -10, opacity: 0 }}
			transition={{ ease: "easeOut", delay: 0.6 }}
			ref={ref}
			className="w-full cursor-pointer project-card relative flex flex-col items-start justify-center gap-2 rounded-2xl md:bg-card-gradient border border-transparent-white "
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<div
				className={`absolute item w-full hidden md:flex top-0 left-0 justify-between items-start px-5 pt-5 lg:px-5 lg:pt-5 z-30 ${
					isHovered ? "opacity-100" : "opacity-0"
				} transition-opacity ease-in-out duration-300`}
			>
				<div>
					<h4 className="text-white text-[14px] lg:text-[18px]">{title}</h4>
					<h4
						className={`${
							available ? "hidden" : "inline"
						} text-white/50 text-[14px] lg:text-[18px]`}
					>
						Coming Soon
					</h4>
				</div>
				<a href={link} target="">
					<div
						className={`${
							available ? "bg-white" : "bg-black"
						} w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full cursor-pointer flex items-center justify-center transition-transform duration-300`}
						style={{
							transform: isHovered ? "translate(0)" : "translate(-20px, 20px)",
						}}
					>
						{available ? (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgb(0, 0, 0)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className=""
							>
								<line x1="7" y1="17" x2="17" y2="7"></line>
								<polyline points="7 7 17 7 17 17"></polyline>
							</svg>
						) : (
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 24 24"
								fill="none"
								stroke="rgb(255, 255, 255)"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className=""
							>
								<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
								<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
							</svg>
						)}
					</div>
				</a>
			</div>
			<div
				className={`overlay absolute w-full flex-col h-full rounded-xl hidden md:flex ${
					isHovered ? "opacity-100" : "opacity-0"
				}`}
			></div>
			<motion.div 
			ref={ref}
			animate={controls}
			initial="intial"
			variants={wrapperVariants}
			exit="exit"
			className="w-full relative flex justify-center items-center"
			>
				{!video ? (
					<Image
						src={img}
						alt="project-image"
						width={500}
						height={500}
						className={classNames(
							"w-full h-[300px] md:h-[400px]  justify-center object-cover bg-cover bg-center rounded-2xl",
							inView ? "opacity-100" : "opacity-0"
						)}
					/>
				) : (
					<div className="h-[300px] w-full md:h-[400px] rounded-2xl overflow-hidden flex justify-center">
						<video
							className="max-w-none h-[308px] sm:h-[496px] rounded-xl"
							autoPlay
							loop
							playsInline
							muted
						>
							<source src={img} type="video/mp4" />
						</video>
					</div>
				)}
			</motion.div>

			<div className="text-[14px] flex gap-2  text-zinc-300 ">
				<a href={link} target="" className={`${available ? "block" : "hidden"} md:hidden`}>
					<span className="font-bold">{title} </span>by {creator}
				</a>

				<p className={`${available ? "hidden" : "block"} text-[#7f7f7f]`}>
					Unavailable
				</p>
			</div>
		</motion.div>
	);
};

export default ProjectCard;
