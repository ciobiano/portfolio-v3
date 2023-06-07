"use client";

import { VariantProps, cva } from "class-variance-authority";
import classNames from "classnames";
import Link from "next/link";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";




type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
	children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	href?: never;
}

type ButtonProps = ButtonBaseProps &
	(ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
	"rounded-full inline-flex gap-2 items-center text-black-text ",
	{
		variants: {
			variant: {
				primary: [
					"bg-white hover:text-shadow hover:shadow-primary transition-[shadow,text-shadow]",
					"[&_.highlight]:ml-2",
				],
				secondary: [
					"text-off-white bg-white bg-opacity-10 border border-transparent-white backdrop-filter-[12px] hover:bg-opacity-20 transition-colors ease-in",
					"[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-2 [&_.highlight:last-child]:-mr-2 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2 w-fit items-center",
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


export const Highlight = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
	const classes = buttonClasses({ variant, size, className: props.className });

	if ("href" in props && props.href !== undefined) {
		return (
			<Link {...props} className={classes}>
				{children}
			</Link>
		);
	}

	return (
		<button {...props} className={classes}>
			{children}
		</button>
	);
};
