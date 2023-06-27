import React from "react";

import { getBlogPost } from "@/app/lib/Mdx/get-blog-slug";
import { Container } from "@/app/components/utils/container";
import BlogHeader from "../../components/blogs/blog-header";
import { notFound } from "next/navigation";
import { Markdown } from "@/app/components/blogs/utils/Markdown";
import { BlogFooter } from "@/app/components/blogs/blog-footer";

interface ProjectPageProps {
	params: { slug: string };
}

export default function ProjectSlugPage({ params }: ProjectPageProps) {
	const item = getBlogPost(params.slug);

	if (!item) {
		return notFound();
	}
	return (
		<Container className="mt-5">
			<BlogHeader post={item} />
			<section className="pb-6">
				<Markdown code={item.body.code} />
				<BlogFooter post={item} />
			</section>
		</Container>
	);
}

// export async function getStaticPaths() {
//   return allPosts.map((snippet) => ({
//    slug: getArticleSlug(snippet),
//   }));
// }
