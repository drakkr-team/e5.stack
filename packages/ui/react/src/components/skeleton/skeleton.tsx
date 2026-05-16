import type { ComponentProps } from "react";
import { cn } from "tailwind-variants";

export type SkeletonRootProps = ComponentProps<"span">;

export function SkeletonRoot(props: SkeletonRootProps) {
	const { className, ...rest } = props;

	return <span className={cn("animate-pulse bg-neutral-4", className)} {...rest} />;
}
