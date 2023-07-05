import { notFound } from "next/navigation";
import { Markdown } from "@/app/components/utils/Markdown";
import { getProject } from "@/app/lib/Mdx/get-project";
import { Header } from "./header";
import { Metadata } from "next";
import { getArticleSlug } from "@/app/lib/Mdx/get-article-slug";
import { allProjects } from "contentlayer/generated";


export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const item =  getProject(params.slug);

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

export async function generateStaticParams() {
	return allProjects.map((snippet) => ({
		slug: getArticleSlug(snippet),
	}));
}

export default async function ProjectPage({ params }: Props) {
	const project = getProject(params.slug);
	if (!project) notFound();

	return (
		<div className="bg-off-white max-w-screen mx-auto">
			<Header project={project} />
			<article className="px-4 py-12 prose prose-zinc prose-quoteless mx-auto">
				<Markdown code={project.body.code} />
			</article>
		</div>
	);
}
