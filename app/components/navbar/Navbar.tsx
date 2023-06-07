"use client";

import { MdOutlineFileDownload } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../utils/Button";
import { Container } from "../utils/container";
import Hamburger from "hamburger-react";
import classNames from "classnames";
import { motion } from 'framer-motion';

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const html = document.querySelector("html");
		if (html) html.classList.toggle("overflow-hidden", isMenuOpen);
	}, [isMenuOpen]);

	useEffect(() => {
		const closeHamburgerNavigation = () => setIsMenuOpen(false);

		window.addEventListener("orientationchange", closeHamburgerNavigation);
		window.addEventListener("resize", closeHamburgerNavigation);

		return () => {
			window.removeEventListener("orientationchange", closeHamburgerNavigation);
			window.removeEventListener("resize", closeHamburgerNavigation);
		};
	}, [setIsMenuOpen]);

	return (
		<motion.header 
		animate={{y: 0, opacity: 1}}
		initial={{y: -1, opacity: 0}}
		transition={{ease: "easeOut", delay: 0}}
		className="fixed bg-transparent-black top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[10px]  z-10">
			<Container className="flex h-[var(--nav-height)] justify-between">
				<Link
					className="items-center font-sans font-bold gap-1 text-xs flex md:w-7/12 
				"
					href="/"
				>
					<FaBullseye size={30} />
					Bg_Ralph
				</Link>
				<div
					className={classNames(
						"transition-[visibility] md:visible flex",
						isMenuOpen ? "visible" : "delay-500 invisible"
					)}
				>
					<nav
						className={classNames(
							"fixed top-[5rem] left-0 h-[50vh] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:items-center md:translate-x-0 md:mr-5 md:pr-5 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none ",
							isMenuOpen
								? "translate-x-0 opacity-100"
								: "translate-x-[-100vw] opacity-0"
						)}
					>
						<ul
							className={classNames(
								"flex h-full flex-col md:flex-row md:items-center [&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
								"ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-[var(--navigation-height)] [&_a]:w-full [&_a]:translate-y-8 [&_a]:items-center [&_a]:text-xs [&_a]:transition-[color,transform] [&_a]:duration-300 md:[&_a]:translate-y-0 md:[&_a]:text-xs [&_a]:md:transition-colors   ",
								isMenuOpen && "[&_a]:translate-y-0"
							)}
						>
							<li>
								<Link href="#work">Work</Link>
							</li>
							<li>
								<Link href="#work">About</Link>
							</li>
							<li>
								<Link href="#work">Blog</Link>
							</li>
						</ul>
					</nav>
				</div>

				<div className="items-center text-center md:flex hidden ">
					<Button href="#" variant="primary" size="small">
						Resumé <MdOutlineFileDownload size={20} />
					</Button>
				</div>

				<div className=" md:hidden items-center flex z-10 ">
					<Hamburger toggle={handleMenuClick} toggled={isMenuOpen} size={20} />
					<span className="sr-only">Toggle menu</span>
				</div>
			</Container>
		</motion.header>
	);
}

export default Navbar;
