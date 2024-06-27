"use client";
import React from "react";
import { Hero, HeroSubtitle, HeroTitle } from "./Hero";
import { Button, Highlight } from "../../utils/Button";
import { motion } from "framer-motion";

export const HeroPage = () => {
	return (
		<Hero>
			<motion.div
				animate={{ x: 0 , opacity: 1 }}
				initial={{ x:-10, opacity: 0 }}
				transition={{ ease: "easeOut"}}
				className="text-sm flex  mt-10  items-center"
			>
				<Button href="/blog" variant="secondary" size="small">
					<span> New post avaliable 🚨 </span>
					<Highlight>→</Highlight>
				</Button>
			</motion.div>
			<motion.div
			animate={{ x: 0 , opacity: 1 }}
			initial={{ x:-10, opacity: 0 }}
			transition={{ ease: "easeOut" , delay: 0.2}}
			
			>

			<HeroSubtitle>
				Building bridges between front and back, one line at a time, {""}from
				pixels to databases, I make it all connect.{" "}
			</HeroSubtitle>
			</motion.div>
			<motion.div
			animate={{ x: 0 , opacity: 1 }}
			initial={{ x:-10, opacity: 0 }}
			transition={{ ease: "easeOut" , delay: 0.4}}
			className="mt-10 flex"
			>

			<HeroTitle>
				Connecting Imagination <br />& Reality
			</HeroTitle>
			</motion.div>
		</Hero>
	);
};
