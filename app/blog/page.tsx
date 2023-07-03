 import React from 'react'
import { allPosts } from 'contentlayer/generated'
import { getArticleSlug } from '../lib/Mdx/get-article-slug'
import { HeroSubtitle, HeroTitle } from '../components/sections/hero/Hero'
import classNames from 'classnames'
import { Container } from '../components/utils/container'
import { ArticleListItem } from '../components/blogs/articleItem'
import { ArticlesList } from '../components/blogs/articleList';





export default async function BlogSlugPage() {

    const FEATURED = allPosts.filter((post) => post.featured)
    const nonArchivedPosts = allPosts.filter((post) => !post.archived)
    .sort((post1, post2) => new Date(post1.createdAt).getTime() - new Date(post2.createdAt).getTime())

  return (
    <div className='relative  mt-16' >

		<Container>
			<HeroTitle className="md:text-2xl pb-6  ">Blog posts</HeroTitle>
			<div className="my-3">
				<HeroSubtitle>Featured</HeroSubtitle>

				<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
					{FEATURED.map((article) => (
						<ArticleListItem 
                        key={getArticleSlug(article)}
                        isFeatured
                        article={article}
                        type="blog"
                        />
							
						
					))}
				</ul>

			</div>
            <div className='mt-12 '>
                <HeroSubtitle> All Posts </HeroSubtitle>

                <ArticlesList  articles={nonArchivedPosts} type='blog'/>

            </div>
		</Container>
    </div>
	);
}

