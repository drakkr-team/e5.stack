import { Field as FieldPrimitive } from "@base-ui/react/field";
import { cn } from "tailwind-variants";

export type FieldRootProps = FieldPrimitive.Root.Props;

export function FieldRoot(props: FieldRootProps) {
	return <FieldPrimitive.Root {...props} />;
}

export type FieldLabelProps = FieldPrimitive.Label.Props & {
	required?: boolean;
};

export function FieldLabel(props: FieldLabelProps) {
	const { required, className, ...rest } = props;

	return (
		<FieldPrimitive.Label
			className={cn(
				// Default
				"font-semibold text-neutral-12 text-sm data-invalid:text-error-11",
				// Disabled
				"data-disabled:opacity-50",
				// Required
				required && "after:mr-0.5 after:inline-block after:text-error-11 after:content-['*']",
				// Override
				className,
			)}
			{...rest}
		/>
	);
}

export type FieldDescriptionProps = FieldPrimitive.Description.Props;

export function FieldDescription(props: FieldDescriptionProps) {
	const { className, ...rest } = props;

	return (
		<FieldPrimitive.Description
			className={cn(
				// Default
				"text-neutral-11 text-xs",
				// Override
				className,
			)}
			{...rest}
		/>
	);
}

export type FieldErrorProps = Omit<FieldPrimitive.Error.Props, "match">;

export function FieldError(props: FieldErrorProps) {
	const { className, ...rest } = props;

	return (
		<FieldPrimitive.Error
			match={true}
			className={cn(
				// Default
				"font-semibold text-error-11 text-xs",
				// Override
				className,
			)}
			{...rest}
		/>
	);
}
