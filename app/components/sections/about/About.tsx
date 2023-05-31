import Link from 'next/link';
import React from 'react'
import { Resume } from './Resume';
import Skill from './Skill';

type Props = {}

const About = (props: Props) => {
  return (
		<div className="mx-auto  items-start  ">
			<div className="flex flex-col  gap-3 text-lg font-extrabold mt-14 ">
				<h1>
					Merging Creativity and Code: An Artful Journey into Full-Stack
					Development .
				</h1>
				{/* <span className="border border-white md:w-[1215px] "></span> */}
			</div>
			<div className="grid  md:grid-cols-2 font-sm leading-2 mt-14 ">
				<div className="mt-10 capitalize text-start md:font-semibold text-sm">
					<h1 className="flex ">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis
						facilis repudiandae odit obcaecati saepe explicabo iusto doloribus
						nesciunt voluptate voluptatibus .
					</h1>
					<Link
						href="#"
						className="relative  md:hidden text-grey hover:text-[#b1b0b0]"
					>
						{" "}
						read more ...
					</Link>
					<h1 className="mt-10 md:flex hidden">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
						maiores nisi eum expedita quod culpa suscipit at aut saepe iure.
					</h1>
					<div>
						<Skill/>
					</div>
				</div>
				<div className="mx-auto mt-10 ">
					<Resume />
				</div>
			</div>
		</div>
	);
}

export default About