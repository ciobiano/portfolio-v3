"use client";
import * as React from "react";
import { twMerge } from "tailwind-merge";
import NextLink from "next/link";

type LinkProps = Omit<JSX.IntrinsicElements["a"], "ref"> & { isNav?: boolean };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
	props,
	ref
) {
	const { children, isNav, ...rest } = props;
	const href = rest.href as string;
	const isHash = href.match(/#|\/#/);
	const isExternal = href.startsWith("http");
	const className = isNav
		? rest.className
		: twMerge("text-grey-dark hover:text-black", rest.className);

	if (isExternal || isHash) {
		const config = isExternal
			? { target: "_blank", rel: "noopener noreferrer" }
			: {};

		return (
			<a href={href} {...config} {...rest} className={className}>
				{children}
			</a>
		);
	}

	return (
		<NextLink href={href} {...rest} ref={ref} className={className}>
			{children}
		</NextLink>
	);
});

Link.displayName = "Link";

export { Link };
