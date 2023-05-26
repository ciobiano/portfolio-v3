import Navbar from "./components/navbar/Navbar";

import { Container } from "./components/utils/container";

import { HeroPage } from "./components/sections/heroSection/HeroPage";
import { ProjectPage } from "./components/sections/projectSection/ProjectPage";

export default function Home() {
	return (
		<div>
			<main>
				<Container>
					<HeroPage />
				</Container>
				<Container>
					<ProjectPage/>
				</Container>
			</main>
		</div>
	);
}
