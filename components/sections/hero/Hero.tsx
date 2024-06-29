'use client'


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
				"text-gradient font-extrabold tracking-tighter  text-lg md:text-7xl",
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
				" text-sm font-semibold md:max-w-[35rem] text-gradient md:text-md",
				className
			)}
		>
			{children}
		</h2>
	);
};

export const Hero = ({ children }: HeroProps) => {
	return (
		<div className=" relative text-start h-[55vh] md:min-w-[450px] md:justify-end justify-center gap-8 md:mt-24 mt-16 flex flex-col flex-nowrap">
			{children}
		</div>
	);
};
