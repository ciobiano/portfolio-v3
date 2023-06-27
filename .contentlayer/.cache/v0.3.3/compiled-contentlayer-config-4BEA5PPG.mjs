// contentlayer.config.js
import readingTime from "reading-time";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var baseFields = {
  title: { type: "string", required: true },
  description: { type: "string", required: true },
  createdAt: { type: "date", required: true },
  updatedAt: { type: "date", required: false },
  featured: { type: "boolean", required: false },
  archived: { type: "boolean", required: false },
  readingTime: { type: "string", required: false },
  keywords: { type: "list", of: { type: "string" }, required: false }
};
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "**/blogPosts/**/*.mdx",
  contentType: "mdx",
  fields: baseFields,
  computedFields: {
    reading_time: {
      type: "json",
      resolve: (post) => readingTime(post.body.raw)
    },
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: "**/projects/**/*.mdx",
  contentType: "mdx",
  fields: {
    ...baseFields,
    // custom fields
    url: { type: "string", required: false },
    // computed fields
    slug: {
      type: "string",
      resolve: (doc) => `${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./app/data",
  documentTypes: [Post, Project],
  mdx: {
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        ".png": "dataurl"
      };
      return options;
    },
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        { properties: { ariaLabel: "Link to section" } }
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
          onVisitLine(node) {
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
          }
        }
      ]
    ],
    remarkPlugins: [remarkGfm]
  }
});
export {
  Post,
  Project,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-4BEA5PPG.mjs.map
