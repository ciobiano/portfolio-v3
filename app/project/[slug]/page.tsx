import { notFound } from "next/navigation";
import { allProjects } from "contentlayer/generated";

import { Markdown } from "@/app/components/blogs/utils/Markdown";
import { getProject } from "@/app/lib/Mdx/get-project";
import { Header } from "./header";


export const revalidate = 60;

type Props = {
	params: {
		slug: string;
	};
};



export default async function ProjecttPage({ params }: Props) {
	  const project = getProject(params.slug)
  if (!project) notFound();

	return (
		<div className=" bg-off-white max-w-screen mx-auto  ">
			<Header project={project} />
			<article className="px-4 py-12 prose prose-zinc prose-quoteless  mx-auto ">
				<Markdown code={project.body.code} />
			</article>
		</div>
	);
}



