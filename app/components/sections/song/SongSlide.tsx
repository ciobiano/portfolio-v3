"use client";

import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import SongCard, { SongProps } from "./SongCard";
import { authenticateSpotify, fetchSongs } from "@/app/data/song";

const SongBox: React.FC = () => {
	const [songs, setSongs] = useState<SongProps[]>([]);

	useEffect(() => {
		const playlistUrl =
			"https://open.spotify.com/playlist/1dsHW66O2AJ2pDS68q58A1?si=7866048a8b9f4c50";

		authenticateSpotify().then((authenticated) => {
			if (authenticated) {
				fetchSongs(playlistUrl).then((tracks) => {
					if (tracks) {
						setSongs(tracks);
					}
				});
			}
		});
	}, []);

	return (
		<div className="container mx-auto z-10 mt-[-350px]">
			<h1 className="mb-4 text-md md:mb-7 md:text-xl justify-center items-center text-center text-gradient">
				Love a little entertainment? <br />
			</h1>
			<p className="text-xs text-center text-gradient">
				Some cool tunes for your ears.
			</p>
			<div className="justify-around lg:my-[4rem]">
				<Marquee pauseOnHover={true} className="gap-4">
					{songs.map((song, index) => (
						<SongCard
							key={index}
							title={song.title}
							artist={song.artist}
							image={song.image}
							link={song.link}
						/>
					))}
				</Marquee>
			</div>
		</div>
	);
};

export default SongBox;
