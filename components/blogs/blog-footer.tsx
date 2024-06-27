"use client";



import type { Post } from "contentlayer/generated";
import { usePathname } from "next/navigation";

interface Props {
	post: Post ;
}

const types = {
	"/blog/": "posts",
	"/snippets/": "snippets",
	"/project/": "project",
};

export function BlogFooter({ post }: Props) {
	const pathname = usePathname();
	const type = findTypeByPathname(pathname);

	const GITHUB_REPO_LINK =
		"htt";
	const link = `${GITHUB_REPO_LINK}/${post._raw.flattenedPath}.mdx`;

	return type ? (
		<footer className="flex justify-end pt-12 pb-2 mb-5 border-b border-grey-dark">
			<a
				target="_blank"
				rel="noreferrer noopener"
				className="hover:underline"
				href={link}
			>
				Edit On GitHub
			</a>
		</footer>
	) : null;
}

function findTypeByPathname(pathname: string | null) {
	if (!pathname) return null;
	return Object.entries(types).find(([key]) => pathname.startsWith(key))?.[1];
}

