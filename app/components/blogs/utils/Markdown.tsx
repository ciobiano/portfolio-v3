'use client'


import styles from "@/app/styles/blog.module.scss";
import { useMDXComponent } from "next-contentlayer/hooks";

import { Link } from "./link";
import { Info } from "./info";
import Image from "next/image";
import { PreCode } from "./pre";

// importing this with next/dynamic will have some flickers..
const components = {
	Link,
	a: Link,
	Info,
	Image,
	pre: PreCode,
};

interface Props {
	code: string;
}

export function Markdown({ code }: Props) {
	const Component = useMDXComponent(code);

	return (
		<main
			className={[
				"prose prose-quoteless text-grey dark:prose-invert max-w-none ",
				styles.reactMarkdown,
			].join(" ")}
		>
			<Component components={components as any} />
		</main>
	);
}
