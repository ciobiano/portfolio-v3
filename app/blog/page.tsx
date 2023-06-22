import React from 'react'
import { allPosts } from 'contentlayer/generated'
import { getArticleSlug } from '../lib/Mdx/get-article-slug'





export default async function BlogSlugPage() {

    const FEATURED = allPosts.filter((post) => post.featured)
    const nonArchivedPosts = allPosts.filter((post) => !post.archived)
    .sort((post1, post2) => new Date(post1.createdAt).getTime() - new Date(post2.createdAt).getTime())

  return (
   <main>
         <h1>Blog</h1>
         <div>
            <h2>Featured</h2>
            <ul>
                {FEATURED.map((post) => (
                    <li key={getArticleSlug(post)}
                    >
                        <a href={getArticleSlug(post)}>{post.title}</a>

                    </li>

                ))}
            </ul>
         </div>
   </main>
  )
}

