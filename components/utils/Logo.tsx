

import Link from 'next/link';
import React from 'react'
import { FaBullseye } from 'react-icons/fa';


export const Logo = ({ className }: { className?: string }) => {
	return (
		<div>
			<Link
				className="items-center font-sans font-bold text-xs flex 
				"
				href="/"
			>
				<FaBullseye size={30} />
				biano Raph
			</Link>
		</div>
	);
};

