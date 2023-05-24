
import Navbar from "./components/navbar/Navbar";

import { Container } from './components/utils/container';

import { HeroPage } from "./components/heroSection/HeroPage";

export default function Home() {
	return (
		<div>
			
			<main>

			<Container>
				<HeroPage />
			</Container>
			</main>
			
		</div>
	);
}
