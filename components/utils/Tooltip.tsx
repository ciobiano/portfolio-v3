import React, { useState } from "react";
import { Spotify } from "../icons/Spotify";

interface TooltipProps {
	content: string;
	children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ content, children }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
		setIsVisible(true);
		const cardRect = e.currentTarget.getBoundingClientRect();
		setPosition({
			x: e.clientX - cardRect.left,
			y: e.clientY - cardRect.top,
		});
	};

	const handleMouseLeave = () => {
		setIsVisible(false);
	};

	const tooltipStyles: React.CSSProperties = {
		position: "absolute",
		left: position.x +"px",
		top: position.y + 'px',
		transform: "translate(-50%, -100%)",
		zIndex: 9999,
		pointerEvents: "none",
		opacity: isVisible ? 1 : 0,
		transition: "opacity 0.3s",
	};

	return (
		<div
			className="relative inline-block"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{children}
			{isVisible && (
				<div
					className="bg-black rounded-xl truncate whitespace-nowrap text-white text-xs  py-1 px-2 flex"
					style={tooltipStyles}
				>
					<span className="px-2"><Spotify/></span>{content}
				</div>
			)}
		</div>
	);
};

export default Tooltip;
