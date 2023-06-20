import {defineDocumentType, makeSource} from 'contentlayer/source-files'
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/**@type {import ("Contentlayer/source-files").computedFields} */

const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },

}

export const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: 'blogPosts/*.mdx',
   contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
            
        },
        publishedAt: {
            type: 'string',
            required: true,
        },
        updatedAt: { 
            type: 'boolean',
            default:true,
            
        },

      

    },
    computedFields,

}))

export default makeSource({
    contentDirPath: 'app/data/blogPosts',
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug,  [rehypePrettyCode,{
            theme: 'github-dark',
            onVisitLine(node){
                //Prevent line from collapsing in `display:grid` mode , and allow empty 
                // lines to be copy/pasted 

                if (node.children.length === 0){
                    node.children = [{type:'text', value:''}]
                }
            
            },
            onVisitHighligtedLine(node){
                node.properties.className.push('line--highlighted')
            },
            onVisitHighligtedWord(node){
                node.properties.className =['word--highlighted']
            }
        }],
        rehypeAutolinkHeadings,
        {
            properties:{
                className:['subheading-anchor'],
                ariaLabel: 'Link to section'
            }
        }
    ],
    },
})  