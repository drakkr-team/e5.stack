import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";

export type SpinnerRootProps = ComponentProps<"svg">;

export function SpinnerRoot(props: SpinnerRootProps) {
	const { className, ...rest } = props;

	return (
		<svg
			role="presentation"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={cn(
				// Default
				"animate-spin",
				// Overrides
				className,
			)}
			{...rest}
		>
			<path d="M21 12a9 9 0 1 1-6.219-8.56" />
		</svg>
	);
}
