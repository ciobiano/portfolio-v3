import React from "react";

import { getBlogPost } from "@/lib/Mdx/get-blog-slug";
import { Container } from "@/components/utils/container";
import BlogHeader from "../../../../components/blogs/blog-header";
import { notFound } from "next/navigation";
import { Markdown } from "@/components/utils/Markdown";
import { BlogFooter } from "@/components/blogs/blog-footer";
import { getArticleSlug } from "@/lib/Mdx/get-article-slug";
import { allPosts } from "contentlayer/generated";

interface BlogSlugPageProps {
	params: { slug: string };
}

export async function generateMetadata({ params }: BlogSlugPageProps) {
	const item = getBlogPost(params.slug);

	if (!item) {
		return {};
	}

	return (
		item && {
			title: item.title,
			description: item.description,
		}
	);
}

export default function BlogSlugPage({ params }: BlogSlugPageProps) {
	const item = getBlogPost(params.slug);

	if (!item) {
		return notFound();
	}
	return (
		<div className="relative max-w-screen bg-off-white mx-auto">
			<BlogHeader post={item} />
			<Container className="pb-6 mx-auto py-12 prose prose-zinc prose-quoteless w-full  ">
				<Markdown code={item.body.code} />
				<BlogFooter post={item} />
			</Container>
		</div>
	);
}

export async function generateStaticParams() {
	return allPosts.map((snippet) => ({
		slug: getArticleSlug(snippet),
	}));
}
