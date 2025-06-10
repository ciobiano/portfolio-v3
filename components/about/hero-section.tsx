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
						Experienced Software Engineer with over 5 years in the industry,
						specializing in full-stack development, cloud technologies, and
						artificial intelligence.
					</p>
					<p className="text-grey mt-5">
						Proficient in leveraging AI tools and frameworks to enhance system
						performance, automate processes, and develop intelligent solutions.
						Proven track record of improving system efficiency, collaborating on
						successful projects, and continuously learning new skills, including
						advanced AI techniques. Adept at working with cross-functional teams
						to deliver high-quality, AI-driven solutions.
					</p>
				</div>
			</div>
			<Avatar />
		</section>
	);
}
