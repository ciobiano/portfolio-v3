import { VariantProps, cva } from "class-variance-authority";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import type * as React from "react";

const link = cva(
	[
		"border-2 rounded-full text-base font-inter font-medium transition outline-none",
	],
	{
		variants: {
			intent: {
				primary:
					"  hover:bg-accent hover:text-secondary text-primary focus-visible:bg-accent focus-visible:border-accent",
				secondary:
					"border-grey-dark text-md  hover:border-accent focus-visible:border-accent p-2 ",
				
				none: "border-transparent",
			},
			size: {
				sm: "px-3 py-1 rounded-xl",
				default: "px-4 py-1.5 rounded-2xl",
				square: "min-w-[40px] w-10 h-10 grid place-items-center rounded-full p-2",
				none: "p-0",
			},
			extras: {
				icon: "flex items-center gap-2 pr-2.5",
			},
		},
		defaultVariants: {
			intent: "primary",
			size: "default",
		},
	}
);

type LinkProps = Omit<JSX.IntrinsicElements["a"], "href" | "ref"> &
	NextLinkProps & { children: React.ReactNode } & VariantProps<typeof link>;

export function Link(props: LinkProps) {
	const href =
		typeof props.href === "string" ? props.href : props.href.pathname;

	// external links
	if (href?.startsWith("https://")) {
		return (
			<a
				{...props}
				target="_blank"
				rel="noreferrer"
				href={href}
				className={link({
					className: props.className,
					intent: props.intent,
					extras: props.extras,
					size: props.size,
				})}
			>
				{props.children}
			</a>
		);
	}

	return (
		<NextLink
			{...props}
			className={link({
				className: props.className,
				intent: props.intent,
				extras: props.extras,
				size: props.size,
			})}
		>
			{props.children}
		</NextLink>
	);
}
