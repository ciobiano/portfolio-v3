import type { Post, Project } from "contentlayer/generated";

export function getArticleSlug(post: Post | Project ) {
	return post._raw.sourceFileName.replace(/\.md(x)?/, "");
}

export function formatArticleSlugPath(post: {
	_raw: { flattenedPath: string };
}) {
	const types = {
		posts: "blog",
		snippets: "snippets",
		project: "project"
	};

	const [prefix, slug] = post._raw.flattenedPath.split("/");
	const type = types[prefix as keyof typeof types];

	return `/${type}/${slug}`;
}
