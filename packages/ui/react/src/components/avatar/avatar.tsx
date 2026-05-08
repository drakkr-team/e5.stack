import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn, tv, type VariantProps } from "tailwind-variants";

const avatarVariants = tv({
	base: "inline-flex select-none items-center justify-center overflow-hidden rounded-full bg-neutral-3 text-neutral-12",
	variants: {
		size: {
			sm: "size-6 text-xs",
			md: "size-8 text-sm",
			lg: "size-10 text-base",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

export type AvatarRootProps = Omit<AvatarPrimitive.Root.Props, "className"> &
	VariantProps<typeof avatarVariants> & {
		className?: string;
	};

export function AvatarRoot(props: AvatarRootProps) {
	const { size, className, ...rest } = props;

	return <AvatarPrimitive.Root className={avatarVariants({ size, className })} {...rest} />;
}

export type AvatarImageProps = AvatarPrimitive.Image.Props;

export function AvatarImage(props: AvatarImageProps) {
	const { className, ...rest } = props;

	return (
		<AvatarPrimitive.Image
			className={cn(
				// Default
				"size-full object-cover",
				// Override
				className,
			)}
			{...rest}
		/>
	);
}

export type AvatarFallbackProps = AvatarPrimitive.Fallback.Props;

export function AvatarFallback(props: AvatarFallbackProps) {
	return <AvatarPrimitive.Fallback {...props} />;
}
