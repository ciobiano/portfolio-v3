import Navbar from "../components/navbar/Navbar";

import { Container } from "../components/utils/container";

import { HeroPage } from "../components/sections/hero/HeroPage";
import About from "../components/sections/about/About";
import SongBox from "../components/sections/song/SongSlide";
import { LastestBlog } from "../components/sections/blog/LastestBlog";
import { StarsIllustration } from "../components/utils/Stars";
import classNames from "classnames";
import { WobbleCardSection } from '../components/sections/project/WabbleCard';

export default function Home() {
	return (
		<div>
			<main>
				<Container>
					<HeroPage />
					<WobbleCardSection />
					<About />
					<div
						className={classNames(
							"mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[40rem] overflow-hidden",
							"[--color:#7F7F7F] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
							"after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(202,202,202,0.39)] after:bg-background"
						)}
					>
						<StarsIllustration />
					</div>
					<SongBox />
					<LastestBlog />
				</Container>
			</main>
		</div>
	);
}
