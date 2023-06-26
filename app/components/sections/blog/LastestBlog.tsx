import { getArticleSlug } from "@/app/lib/Mdx/get-article-slug";
import { allPosts } from "contentlayer/generated";
import Link from "next/link";
import React from "react";
import { BsArrowRightShort } from "react-icons/bs";

type Props = {};

export const LastestBlog = (props: Props) => {
	const ListItem = allPosts.filter((post) => post);

	return (
		<section className="mx-auto  py-32 ">
			<header className="flex flex-col gap-y-5 sm:flex-row md:items-center justify-between">
				<h2 className="font-bold text-xl md:text-5xl relative max-w-fit text-gradient">
					Latest blog posts
				</h2>

				<Link className="max-w-fit items-center  inline-flex" href="#">
					Browse all blog posts
					
					<BsArrowRightShort width={25} height={25} />
				</Link>
			</header>

			<ul className="mt-20 flex flex-col gap-5">
				{ListItem.slice(0,3).map((article) => (
					<li
						className="flex justify-between group"
						key={getArticleSlug(article)}
					>
						<Link className="w-full" href="">
							<h3 className="font-semibold  text-xs md:text-sm transition-colors border-grey-dark group-hover:border-b-grey border-b max-w-fit">
								{article.title}
							</h3>

							<p className="mt-1 md:mt-2 text-base md:text-sm text-grey max-w-xl ">
								{article.description}
							</p>
						</Link>

						<Link
							aria-label="View full blog post"
							className="group-hover:scale-125 group-hover:-rotate-45 group-hover:border-accent transition-all transform origin-center "
							href={"#"}
						>
							<div className="border border-white  rounded-full p-2">
								<BsArrowRightShort width={25} height={25} />
							</div>
						</Link>
					</li>
				))}
			</ul>
		</section>
	);
};
