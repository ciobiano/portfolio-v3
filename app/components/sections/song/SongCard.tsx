'use client'


import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Tooltip} from "react-tooltip";


export interface SongProps {
	title: string;
	artist: string;
	image: string;
	link: string;
}

const SongCard: React.FC<SongProps> = ({ title, artist, image, link }) => {
	return (
		<>
			<Link
				href={link}
				target="_blank"
				aria-label="Check out song on Spotify"
				data-tooltip-id="ancor"
			>
				<div className="relative flex h-[138px] w-[195px] items-center justify-center overflow-hidden rounded-xl py-0 sm:h-[140px] sm:w-[200px] md:h-[160px] md:w-[250px] lg:h-[190px] lg:w-[270px] m-5 ">
					<Image
						src={image}
						alt={title}
						width={500}
						height={500}
						priority={true}
						className="w-full  justify-center rounded-xl bg-cover bg-center overflow-hidden"
					/>
				</div>
					<Tooltip id="ancor" className="w-fit h-full my-10 rounded-xl text-xs text-white z-10"  content="hello"/>
					
					
			</Link>
		</>
	);
};

export default SongCard;
