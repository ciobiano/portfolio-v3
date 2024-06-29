"use client";
import { Button, Highlight } from "@/components/utils/Button";
import { WobbleCard } from "@/components/utils/Wabble-card";
import Image from "next/image";
import Link from "next/link";

import React from "react";

export function WobbleCardSection() {
	return (
		<section className="flex flex-col pt-28 lg:pt-[14rem] items-center justify-center mx-auto  ">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
				<Link
					href="/project/finesse-store"
					className="cursor-pointer col-span-1 lg:col-span-2 h-full bg-[#510400]min-h-[500px] lg:min-h-[300px]  rounded-xl "
				>
					<WobbleCard containerClassName="col-span-1 lg:col-span-2 h-full bg-[#510400] min-h-[400px] lg:min-h-[300px]">
						<div className="max-w-xs">
							<h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Finesse pharmaceutical store
							</h2>
							<p className="mt-4 text-left  text-base/6 text-neutral-200">
								An online pharmaceutical store that helps to manage the store
								and keep track of the drugs and the sales.
							</p>
						</div>
						<Image
							src="https://res.cloudinary.com/dsl4v4vk5/image/upload/v1719561170/Safari_Dark_Mode_ON-2_ndux0q.svg"
							width={500}
							height={500}
							alt="finesse store"
							className="absolute -right-4 lg:-right-[20%] -bottom-5 object-contain rounded-2xl"
						/>
					</WobbleCard>
				</Link>
				<Link
					href="/project/cms-system"
					className="cursor-pointer col-span-1 min-h-[300px] md:min-h-[400px] bg-zinc-800 rounded-2xl "
				>
					<WobbleCard containerClassName="col-span-1 min-h-[300px] md:min-h-[400px] bg-zinc-900">
						<h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
							Content management system
						</h2>
						<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
							This is a content management system that helps to manage the
							content and inventory of an app.
						</p>
					</WobbleCard>
				</Link>
				<Link
					href="/project/eterna-care"
					className="cursor-pointer col-span-1 lg:col-span-3 bg-cyan-900 min-h-[00px] lg:min-h-[600px] xl:min-h-[300px] rounded-2xl"
				>
					<WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-cyan-900 min-h-[300px] lg:min-h-[600px] xl:min-h-[300px]">
						<div className="max-w-sm">
							<h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
								Eterna health care institution
							</h2>
							<p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
								This is a blood bank management system that helps to manage the
								blood bank and the blood donation process.
							</p>
						</div>
						<Image
							src="https://res.cloudinary.com/dsl4v4vk5/image/upload/v1719555752/Safari_Dark_Mode_ON_n1zvm7.svg"
							width={500}
							height={500}
							alt="linear demo image"
							className="absolute -right-10 md:-right-[10%] lg:-right-[10%] -bottom-5 object-contain rounded-2xl hidden lg:flex "
						/>
					</WobbleCard>
				</Link>
				<div className="text-sm flex self-end mt-5 items-center">
					<Button href="#" variant="secondary" size="small" className="my-auto">
						Read More <Highlight>→</Highlight>
					</Button>
				</div>
			</div>
		</section>
	);
}
