import { allPosts } from "contentlayer/generated";
import { getArticleSlug } from "./get-article-slug";

export function getBlogPost(slug: string) {
	return allPosts.find((snippet) => getArticleSlug(snippet) === slug);
}
