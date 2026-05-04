import { Field as FieldPrimitive } from "@base-ui/react/field";
import { cn } from "@workspace/ui-react/utils";

type FieldProps = FieldPrimitive.Root.Props;

function Field(props: FieldProps) {
	return <FieldPrimitive.Root {...props} />;
}

type FieldLabelProps = FieldPrimitive.Label.Props & {
	required?: boolean;
};

function FieldLabel(props: FieldLabelProps) {
	const { required, className, ...rest } = props;

	const defaultClassName = cn(
		// Default
		"font-semibold text-neutral-12 text-sm data-invalid:text-error-11",
		// Disabled
		"data-disabled:opacity-50",
		// Required
		required && "after:mr-0.5 after:inline-block after:text-error-11 after:content-['*']",
		className,
	);

	return <FieldPrimitive.Label className={defaultClassName} {...rest} />;
}

type FieldDescriptionProps = FieldPrimitive.Description.Props;

function FieldDescription(props: FieldDescriptionProps) {
	const { className, ...rest } = props;

	const defaultClassName = cn("text-neutral-11 text-xs", className);

	return <FieldPrimitive.Description className={defaultClassName} {...rest} />;
}

type FieldErrorProps = Omit<FieldPrimitive.Error.Props, "match">;

function FieldError(props: FieldErrorProps) {
	const { className, ...rest } = props;

	const defaultClassName = cn("font-semibold text-error-11 text-xs", className);

	return <FieldPrimitive.Error match={true} className={defaultClassName} {...rest} />;
}

Field.Label = FieldLabel;
Field.Description = FieldDescription;
Field.Error = FieldError;

export type { FieldDescriptionProps, FieldErrorProps, FieldLabelProps, FieldProps };
export { Field, FieldPrimitive };
