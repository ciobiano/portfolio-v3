"use client";
import {
	motion,
	useMotionTemplate,
	useMotionValue,
	useSpring,
} from "framer-motion";

import { MouseEventHandler, PropsWithChildren } from "react";

export const Card: React.FC<PropsWithChildren> = ({ children }) => {
	// const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
	// const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

	// function onMouseMove({ currentTarget, clientX, clientY }: any) {
	// 	const { left, top } = currentTarget.getBoundingClientRect();
	// 	mouseX.set(clientX - left);
	// 	mouseY.set(clientY - top);
	// }
	// let maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
	// let style = { maskImage, WebkitMaskImage: maskImage };

	return (
		<div
			// onMouseMove={onMouseMove}
			className="overflow-hidden relative duration-700 border rounded-xl hover:bg-transparent-white group md:gap-4 hover:border-grey border-grey-dark "
		>
			

			{children}
		</div>
	);
};
