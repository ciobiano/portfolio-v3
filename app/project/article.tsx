import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";


type Props = {
	project: Project;
	
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
						{project.createdAt ? (
							<time dateTime={new Date(project.createdAt).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.createdAt)
								)}
							</time>
						) : (
							<span>SOON</span>
						)}
					</span>
					
				</div>
				<h2 className="z-20 text-sm font-bold duration-1000 lg:text-md text-zinc-200 group-hover:text-white  text-gradient">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-xs  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
