import Navbar from "./components/navbar/Navbar";

import { Container } from "./components/utils/container";

import { HeroPage } from "./components/sections/hero/HeroPage";
import { ProjectPage } from "./components/sections/project/ProjectPage";
import About from "./components/sections/about/About";
import { SongBox } from "./components/sections/song/SongSlide";


export default function Home() {
	return (
		<div>
			<main>
				<Container>
					<HeroPage />
					<ProjectPage/>
					<About/>
					<SongBox/>
				</Container>
				
			</main>
		</div>
	);
}
