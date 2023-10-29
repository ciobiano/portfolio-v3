import { Avatar } from "../icons/Avatar";

export function AboutHeroSection() {
	return (
		<section className="mx-auto w-full  pb-32 px-5 md:px-0 flex items-end justify-between">
			<div className="w-full md:w-1/2 justify-center items-center my-auto">
				<h1 className="text-4xl md:text-5xl font-bold text-gradient mb-5">
					About Us
				</h1>

				<div className="max-w-xl text-sm font-medium ">
					<p className="text-grey mt-10">
						In my story, curiosity and coding mix. I was first intrigued to
						front-end programming because of the immediate visual
						feedback.However, I immediately realized that the key lay in
						connecting the dots—from front to back. Now, apart from being
						aesthetically pleasing, my web apps are scalable and reliable.
					</p>
					<p className="text-grey mt-5">
						Whether you&apos;re an aspiring entrepreneur or a fellow developer, I
						welcome partnerships, talks, and coffee dates. Reach out and let&apos;s
						create something special.
					</p>
				</div>
			</div>
			<Avatar />
		</section>
	);
}
