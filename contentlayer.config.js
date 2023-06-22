import readingTime from "reading-time";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const baseFields = {
	title: { type: "string", required: true },
	description: { type: "string", required: true },
	createdAt: { type: "date", required: true },
	updatedAt: { type: "date", required: false },
	featured: { type: "boolean", required: false },
	archived: { type: "boolean", required: false },
	readingTime: { type: "string", required: false },
	keywords: { type: "list", of: { type: "string" }, required: false },
};

export const Post = defineDocumentType(() => ({
	name: "Post",
	filePathPattern: "**/blogPosts/**/*.mdx",
	contentType: "mdx",
	fields: baseFields,
	computedFields: {
		 reading_time: {
      type: 'json',
      resolve: post => readingTime(post.body.raw)
    },
		slug: {
			type: "string",
			resolve: (doc) => `${doc._raw.flattenedPath}`,
		},
		slugAsParams: {
			type: "string",
			resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
		},
	},
}));

export default makeSource({
	contentDirPath: "./app/data",
	documentTypes: [Post],
	mdx: {
		esbuildOptions: (options) => {
			options.loader = {
				...options.loader,
				".png": "dataurl",
			};

			return options;
		},
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{ properties: { ariaLabel: "Link to section" } },
			],
			[
				rehypePrettyCode,
				{
					theme: "github-dark",
					onVisitLine(node) {
						// prevent lines from collapsing in `display: grid` mode, and allow empty
						// lines to be copy/pasted
						if (node.children.length === 0) {
							node.children = [{ type: "text", value: " " }];
						}

						node.properties["data-line"] = true;
					},
					onVisitHighlightedLine(node) {
						node.properties["data-line-highlighted"] = true;
					},
					onVisitHighlightedWord(node) {
						node.properties["data-word-highlighted"] = true;
					},
				},
			],
		],
		remarkPlugins: [remarkGfm],
	},
});
