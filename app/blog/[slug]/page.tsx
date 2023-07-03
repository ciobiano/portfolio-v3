import React from "react";

import { getBlogPost } from "@/app/lib/Mdx/get-blog-slug";
import { Container } from "@/app/components/utils/container";
import BlogHeader from "../../components/blogs/blog-header";
import { notFound } from "next/navigation";
import { Markdown } from "@/app/components/blogs/utils/Markdown";
import { BlogFooter } from "@/app/components/blogs/blog-footer";


interface BlogSlugPageProps {
	params: { slug: string };
}


export default function BlogSlugPage({ params }: BlogSlugPageProps) {
	const item = getBlogPost(params.slug);

	if (!item) {
		return notFound();
	}
	return (
		<div className="relative max-w-screen bg-off-white mx-auto">
			<BlogHeader post={item} />

			<Container className="pb-6 mx-autopx-4 py-12 prose prose-zinc prose-quoteless  ">
				<Markdown code={item.body.code} />
				<BlogFooter post={item} />
			</Container>
		</div>
	);
}
 
// export async function getStaticPaths() {
//   return allPosts.map((snippet) => ({
//    slug: getArticleSlug(snippet),
//   }));
// }
