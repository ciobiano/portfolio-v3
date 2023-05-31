"use client";

import { VariantProps, cva } from "class-variance-authority";
import Link from "next/link";

import { IconType } from "react-icons";

interface ButtonProps extends VariantProps<typeof buttonClasses> {
	children: React.ReactNode;
	href: string;
	icon?: IconType;
}

const buttonClasses = cva(
	"rounded-full inline-flex gap-2 items-center text-black-text ",
	{
		variants: {
			variant: {
				primary: "bg-white ",
				secondary: [
					"text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in md:w-[fit-content]",
					

					
				],
				tertiary: "bg-transparent border border-white",
				
				
				
			},

			size: {
				small: "text-[16px] px-3 h-7",
				medium: "text-sm px-4 h-8",
				large: " text-md px-6 h-12",
			},
		},

		defaultVariants: {
			variant: "primary",
			size: "medium",
		},
	}
);

const Button = ({ children, href, variant, size, icon:Icon }: ButtonProps) => {
	return (
		<Link className={buttonClasses({ variant, size })} href={href}>
			{children}
			
		</Link>
	);
};

export default Button;
