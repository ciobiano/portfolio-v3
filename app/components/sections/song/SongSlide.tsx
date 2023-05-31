"use client";

import Image from "next/image";

import Marquee from "react-fast-marquee";
import { songs } from "../../data/song";
import SongCard from "./SongCard";

export const SongBox = () => {
	

	return (
		<div className="container mx-auto mt-14 ">
			<h1 className="text-md font-bold mb-4">
				Love alittle enterainment ? <br />{" "}
				<span className="text-xs text-grey">
					I recommend you give these a try.
				</span>
			</h1>
			<div className=" justify-around    lg:my-[1rem] ">
				<Marquee pauseOnHover={true} className="gap-4  ">
					{songs.map((song, index) => (
						<SongCard
							key={index}
							title={song.title}
							artist={song.artist}
							image={song.img}
							link={song.link}
						/>
					))}
				</Marquee>
			</div>
		</div>
	);
};
