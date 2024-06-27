import Link from 'next/link';
import React from 'react'

type Props = {
    project: {
        url?: string;
        title: string
        description: string
        repository?: string
    }
}

export const Header = ({project}: Props) => {

    const links: { label: string; href: string }[] = [];
		if (project.repository) {
			links.push({
				label: "GitHub",
				href: `https://github.com/${project.repository}`,
			});
		}
		if (project.url) {
			links.push({
				label: "Website",
				href: project.url,
			});
		}
  return (
		<header className='bg-background py-24 '> 
			<div className="container mx-auto relative isolate overflow-hidden  py-24 sm:py-3">
				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
					<div className="mx-auto max-w-2xl lg:mx-0">
						<h1 className="text-2xl font-bold tracking-tight text-gradient  sm:text-6xl">
							{project.title}
						</h1>
						<p className="mt-6 text-xs md:text-md leading-8 text-zinc-400">
							{project.description}
						</p>
					</div>

					<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
						<div className="grid grid-cols-1 gap-y-6 gap-x-8 text-base font-semibold leading-7 text-off-white sm:grid-cols-2 md:flex lg:gap-x-10">
							{links.map((link) => (
								<Link target="_blank" key={link.label} href={link.href}>
									{link.label} <span aria-hidden="true">&rarr;</span>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
