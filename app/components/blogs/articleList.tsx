import type { Post} from "contentlayer/generated";
import { getArticleSlug } from "@/app/lib/Mdx/get-article-slug";
import { ArticleListItem } from "./articleItem";

interface Props {
	articles: (Post)[];
	type: "blog" | "projects";
}

export function ArticlesList({ type, articles }: Props) {
	return (
		<ul className="flex flex-col mt-5">
			{articles.map((article) => (
				<ArticleListItem
					article={article}
					key={getArticleSlug(article)}
					type={type}
				/>
			))}
		</ul>
	);
}
