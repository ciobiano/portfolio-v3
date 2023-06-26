import format from "date-fns/format";
import classNames from "clsx";
import type {Post } from "contentlayer/generated";
import { getArticleSlug } from "@/app/lib/Mdx/get-article-slug";

import { BsArrowRightShort } from 'react-icons/bs'
import NextLink from "next/link";
import { Link } from "../utils/Link";


interface Props {
	isFeatured?: boolean;
	article: Post;
	type: "blog" | "projects";
}

export function ArticleListItem({ isFeatured, article, type }: Props) {
	const publishedAt = format(new Date(article.createdAt), "dd MMMM yyyy");
	const extraAProps = isFeatured
		? {
				className:
					" block p-4 w-full h-full border-grey-dark border-2 transition rounded-2xl",
		  }
		: {};

	return (
		<li
			className={classNames("my-4 first:mt-0 group relative", {
				"mt-0 py-0.5": isFeatured,
			})}
		>
			{isFeatured ? (
				<Link
					
					className="absolute -top-3 right-3.5 group-hover:scale-125 group-hover:-rotate-40 group-hover:border-accent"
					intent="secondary"
					href={`/blog/${getArticleSlug(article)}`}
				>
					<BsArrowRightShort width={25} height={25} />
				</Link>
			) : null}

			<NextLink href={`/${type}/${getArticleSlug(article)}`} {...extraAProps}>
				<h2 style={{ fontSize: "1.25rem" }} className="font-bold">
					{article.title}
				</h2>
				<p className="mt-1 text-secondary">{article.description}</p>
				{isFeatured ? null : (
					<span className="block mt-1.5 font-normal text-grey-dark">
						{publishedAt}
					</span>
				)}
			</NextLink>
		</li>
	);
}
