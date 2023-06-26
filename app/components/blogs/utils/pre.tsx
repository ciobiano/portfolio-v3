"use client";

import * as React from "react";
import { onlyText } from "react-children-utilities";

interface Props {
	"data-language": string;
	children: React.ReactNode;
}

export function PreCode({ children, ...rest }: Props) {
	const copyCodeButtonRef = React.useRef<HTMLButtonElement | null>(null);
	const language = rest["data-language"];

	function handleCopyCode() {
		navigator.clipboard.writeText(onlyText(children));

		copyCodeButtonRef.current!.innerText = "Copied!";
		setTimeout(() => {
			copyCodeButtonRef.current!.innerText = "Copy";
		}, 2000);
	}

	return (
		<>
			<div data-code-pre>
				<pre {...rest}>{children}</pre>
			</div>

			<div className="flex gap-1 self-end mr-4 -mt-[2px]">
				<span
					data-language-tag
					className="text-accent bg-transparent-white border-grey-dark b rounded-b-md px-2 inline-block max-w-fit cursor-default font-sans"
				>
					{language}
				</span>

				<button
					onClick={handleCopyCode}
					ref={copyCodeButtonRef}
					data-language-tag
					className="bg-primary text-off-white border rounded-b-md px-2 inline-block max-w-fit hover:!bg-grey-dark hover:text-primary transition-colors duration-200 ease-in-out"
				>
					Copy
				</button>
			</div>
		</>
	);
}
