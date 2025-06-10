"use client";

import classNames from "classnames";

interface HeroProps {
	children: React.ReactNode;
}

interface HeroElementProps {
	children: React.ReactNode;
	className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
	return (
		<h1
			className={classNames(
				"text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gradient leading-tight md:leading-none",
				className
			)}
		>
			{children}
		</h1>
	);
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
	return (
		<h2
			className={classNames(
				"text-base sm:text-lg md:text-xl font-semibold max-w-full sm:max-w-lg md:max-w-[35rem] text-gradient leading-relaxed",
				className
			)}
		>
			{children}
		</h2>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return (
		<div className="relative text-start min-h-[50vh] sm:min-h-[55vh] md:min-w-[450px] justify-center md:justify-end gap-6 sm:gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-24 flex flex-col flex-nowrap px-4 sm:px-0">
			{children}
		</div>
	);
};
