import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

type Props = {}

export const lastestBlog = (props: Props) => {
  return (
		<section className="mx-auto max-w-6xl w-full py-32 px-5 md:px-0">
			<header className="flex flex-col gap-y-5 sm:flex-row md:items-center justify-between">
				<h2 className="font-poppins font-bold text-5xl md:text-6xl relative max-w-fit">
					Latest blog posts
				</h2>

				<Link className="max-w-fit" href="#">
					Browse all blog posts
					<BsArrowRightShort width={25} height={25} />
				</Link>
			</header>
			<ul className="mt-20 flex flex-col gap-5">
				
					<li
						className="flex justify-between group"
					>
						<Link
							
							className="w-full"
							
							href=''
                            	>
							<h3 className="font-semibold font-poppins text-xl md:text-2xl transition-colors border-accent/10 group-hover:border-b-accent border-b-2 max-w-fit">
							 The return of the great Alex Smith  
							</h3>

							<p className="mt-1 md:mt-2 text-base md:text-lg text-gray-light max-w-xl font-inter">
								We are excited to announce that Alex Smith will be returning to the team as a senior developer. Alex has been working with us for over 5 years and has been a key part of our success.
							</p>
						</Link>

						<Link
							aria-label="View full blog post"
							className="group-hover:scale-125 group-hover:-rotate-45 group-hover:border-accent"
							
							href={'#'}
						>
							<BsArrowRightShort width={25} height={25} />
						</Link>
					</li>
				
			</ul>
		</section>
	);
}

