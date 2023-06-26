"use client";

import React from "react";
import type { Post } from "contentlayer/generated";
import format from "date-fns/format";
import { FcAlarmClock } from "react-icons/fc";

interface Props {
	post: Post ;
}

export default function BlogHeader({ post }: Props) {
	const publishedAt = format(new Date(post.createdAt), "MMMM dd, yyyy");
	const readingTime = post.readingTime || (post as any).computedReadingTime;

	const readTimeId = React.useId();

	return (
		<header className="bg-transparent text-md py-14 mb-6 mx-auto">
			<div className=" mx-auto ">
				<div className="border-b-2 border-grey-dark mb-5 pb-5 flex flex-col md:flex-row md:justify-between">
					<div>
						<h1 className="mb-3 text-md font-bold md:text-lg font-title text-gradient">
							{post.title}
						</h1>
						<p className="text-grey text-xs md:text-sm">{post.description}</p>
					</div>

					<div
						style={{ scrollbarWidth: "thin" }}
						className="gap-6 overflow-x-auto py-5  text-xs"
					>
						<p className="font-medium min-w-fit ">
							<time dateTime={new Date(post.createdAt).toISOString()}>
								{publishedAt}
							</time>
						</p>
						{readingTime ? (
							<p className="flex items-center  min-w-fit">
								<FcAlarmClock
									aria-labelledby={readTimeId}
									className="fill-grey-dark"
								/>{" "}
								<span id={readTimeId}>{readingTime}</span>
							</p>
						) : null}
					</div>
				</div>
			</div>
		</header>
	);
}
