import Link from 'next/link'
import React from 'react'
import { BsArrowRightShort } from 'react-icons/bs'

type Props = {}

export const LastestBlog = (props: Props) => {
  return (
		<section className="mx-auto  py-32 ">
			<header className="flex flex-col gap-y-5 sm:flex-row md:items-center justify-between">
				<h2 className="font-bold text-xl md:text-5xl relative max-w-fit text-gradient">
					Latest blog posts
				</h2>

				<Link className="max-w-fit inline-flex" href="#">
					Browse all blog posts
					<BsArrowRightShort width={25} height={25} />
				</Link>
			</header>
			<ul className="mt-20 flex flex-col gap-5">
				<li className="flex justify-between group">
					<Link className="w-full" href="">
						<h3 className="font-semibold  text-xs md:text-sm transition-colors border-grey group-hover:border-b-grey border-b max-w-fit">
							The return of the great Alex Smith
						</h3>

						<p className="mt-1 md:mt-2 text-base md:text-sm text-grey max-w-xl ">
							We are excited to announce that Alex Smith will be returning to
							the team as a senior developer. Alex has been working with us for
							over 5 years and has been a key part of our success.
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
			</ul>
		</section>
	);
}

