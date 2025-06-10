"use client";

import { MdOutlineFileDownload } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "../utils/Button";
import { Container } from "../utils/container";
import Hamburger from "hamburger-react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { Logo } from "../utils/Logo";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleMenuClick = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleResumeDownload = () => {
		// Create a temporary link element to trigger download
		const link = document.createElement("a");
		link.href = "/CV-2.pdf";
		link.download = "Obiano_Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleMenuItemClick = () => {
		setIsMenuOpen(false);
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
			animate={{ y: 0, opacity: 1 }}
			initial={{ y: -1, opacity: 0 }}
			transition={{ ease: "easeOut", delay: 0 }}
			className="fixed bg-transparent-black top-0 left-0 w-full border-b border-transparent-white backdrop-blur-[10px] z-50"
		>
			<Container className="flex h-[var(--nav-height)] justify-between items-center">
				<div className="my-auto">
					<Logo />
				</div>
				<div
					className={classNames(
						"transition-[visibility] md:visible flex",
						isMenuOpen ? "visible" : "delay-500 invisible"
					)}
				>
					<nav
						className={classNames(
							"fixed top-[var(--nav-height)] left-0 h-[calc(100vh_-_var(--nav-height))] w-full overflow-auto bg-background transition-opacity duration-500 md:relative md:top-0 md:block md:h-auto md:w-auto md:translate-x-0 md:overflow-hidden md:bg-transparent md:opacity-100 md:transition-none",
							isMenuOpen
								? "translate-x-0 opacity-100"
								: "translate-x-[-100vw] opacity-0"
						)}
					>
						<ul
							className={classNames(
								"flex h-full flex-col md:flex-row md:items-center px-4 md:px-0 py-6 md:py-0 [&_li]:ml-0 md:[&_li]:ml-6 [&_li]:border-b [&_li]:border-grey-dark md:[&_li]:border-none",
								"ease-in [&_a:hover]:text-grey [&_a]:flex [&_a]:h-14 md:[&_a]:h-auto [&_a]:w-full [&_a]:translate-y-8 md:[&_a]:translate-y-0 [&_a]:items-center [&_a]:text-base md:[&_a]:text-xs [&_a]:transition-[color,transform] [&_a]:duration-300 [&_a]:font-medium md:[&_a]:font-normal [&_a]:md:transition-colors",
								isMenuOpen && "[&_a]:translate-y-0"
							)}
						>
							<li>
								<Link href="/project" onClick={handleMenuItemClick}>
									Work
								</Link>
							</li>
							<li>
								<Link href="/about" onClick={handleMenuItemClick}>
									About
								</Link>
							</li>
							<li>
								<Link href="/blog" onClick={handleMenuItemClick}>
									Blog
								</Link>
							</li>
							<li className="md:hidden">
								<Link href="/" onClick={handleMenuItemClick}>
									Contact Me
								</Link>
							</li>
							<li className="md:hidden">
								<button
									onClick={() => {
										handleResumeDownload();
										handleMenuItemClick();
									}}
									className="flex h-14 w-full translate-y-8 items-center text-base font-medium transition-[color,transform] duration-300 ease-in hover:text-grey"
								>
									Resumé <MdOutlineFileDownload size={20} className="ml-2" />
								</button>
							</li>
						</ul>
					</nav>
				</div>

				<div className="items-center text-center md:flex hidden">
					<button
						onClick={handleResumeDownload}
						className="rounded-full inline-flex gap-2 items-center text-black-text bg-white hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow] text-sm md:text-[16px] px-3 h-7 touch-manipulation"
					>
						Resumé <MdOutlineFileDownload size={18} />
					</button>
				</div>

				<div className="md:hidden items-center flex z-10">
					<Hamburger
						toggle={handleMenuClick}
						toggled={isMenuOpen}
						size={20}
						duration={0.3}
						color="#ffffff"
					/>
					<span className="sr-only">Toggle menu</span>
				</div>
			</Container>
		</motion.header>
	);
}

export default Navbar;
