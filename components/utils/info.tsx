type DivProps = JSX.IntrinsicElements["div"];

interface Props extends DivProps {
	title?: string;
	color?: string;
}

export function Info({ children, title, color, ...rest }: Props) {
	const borderColor = color || "#60A5FA";

	return (
		<div
			{...rest}
			data-info
			style={{ borderColor, ...rest.style }}
			className="p-2 px-4 my-3 mb-5 text-sm border-l-[4px] rounded-md rounded-l-none shadow border-1 border bg-primary"
		>
			{title ? <h3 className="text-sm font-semibold my-2.5 ">{title}</h3> : null}

			<span className="text-grey-dark text-xs">{children}</span>
		</div>
	);
}
